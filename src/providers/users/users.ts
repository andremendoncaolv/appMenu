import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private API_URL_LOGIN = "http://emileweb.pythonanywhere.com/login/";

  private API_REST_LOGIN = "http://renatoln.pythonanywhere.com/usuarios/";

  constructor(public http : Http){
   } 

   // MÉTODO PARA CONSULTAR LOGIN
  login(email: string, senha: string){
    return new Promise((resolve, reject) =>{
      var data ={
        email: email,
        senha: senha
      };
      
      /**
      let headers = new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Basic bWFub2VsOnU1UDV5N1Uz',
        'Access-Control-Allow-Origin': '*'
      });

      let options = new RequestOptions({ headers: headers, body: data});



      this.http.post(this.API_URL_LOGIN, data, options)
      this.http.post(this.API_URL_LOGIN, options)
        .subscribe((result: any) => {
        resolve(result.json())
        /}),
      (error) =>{
      reject(error);
      }
      */
      this.http.get(this.API_REST_LOGIN)
      .subscribe((result: any) => {
        //resolve(result.jason())
        console.log(result[0]);
      }),
      (error) => {
        reject(error);
      }
    });
   }
}
