import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
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
        email : email,
        senha : senha
      };

      this.http.post(this.API_URL_LOGIN, data)
        .subscribe((result: any) => {
        resolve(result.json())
        },
      (error) =>{
        reject(error.json());
      })
    });
   }
}
