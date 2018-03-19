import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private API_REST_LOGIN = "http://renatoln.pythonanywhere.com/usuarios/?email=";

  constructor(public http : Http){
   } 

  // MÉTODO PARA CONSULTAR LOGIN
  login(email: string, senha: string){
    return new Promise((resolve, reject) =>{
      if(email != null && senha != null){
      var data ={
        email: email,
        senha: senha
      };
    }else{
      (error) => {
        reject(error);
      }
    }      
      this.http.get(this.API_REST_LOGIN + data.email + '&senha=', data.senha)
      .subscribe((result: any) => {
        resolve(result.json())
      }),
      (error) => {
        reject(error);
      }
    });
   }
}
