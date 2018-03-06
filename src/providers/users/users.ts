import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersProvider {
  private API_URL_LOGIN = "http://emileweb.pythonanywhere.com/login/";

  constructor(public http : Http){
   } 

   login(email: string, password: string){
     return new Promise((resolve, reject) =>{
       var data = {
         emahil: email,
         password: password
       };

       this.http.post(this.API_URL_LOGIN, data){
         .subscribe((result: any) =>{
           resolve(result.json()); 
         };
         (error)=>{
           reject(error.jason());
         }
       }
     }
   }
}
