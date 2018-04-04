import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private API_REST_LOGIN = "http://renatoln.pythonanywhere.com/usuarios/?email=";
  private API_REST_MENSAGEM = "http://renatoln.pythonanywhere.com/mensagens/?destinatario=";
  private API_REST_USUARIOS = "http://renatoln.pythonanywhere.com/usuarios/";
  private API_REST_DISCIPLINAS_USUARIO = "http://renatoln.pythonanywhere.com/disciplina_alunoss/";

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

   listarMensagens(id: number){
      return new Promise((resolve, reject) =>{
        if(id != null){
        var objeto ={
          id: id
        };
      }else{
        (error) => {
          reject(error);
        }
      }
        this.http.get(this.API_REST_MENSAGEM + objeto.id)
        .subscribe((result: any) => {
          resolve(result.json())
        }),
        (error) => {
          reject(error);
        }
      });
     }

     listarUsuarios(){
      return new Promise((resolve, reject) =>{
        this.http.get(this.API_REST_USUARIOS)
        .subscribe((result: any) => {
          resolve(result.json())
        }),
        (error) => {
          reject(error);
          console.log("lista usuario");
          console.log("result");
        }
      });
     }

   listarDisciplinasAlunos(id: number){
     return new Promise((resolve, reject) =>{
       if(id != null){
       var objeto ={
         id: id
       };
     }else{
       (error) => {
         reject(error);
       }
     }
       this.http.get(this.API_REST_DISCIPLINAS_USUARIO + objeto.id)
       .subscribe((result: any) => {
         resolve(result.json())
       }),
       (error) => {
         reject(error);
       }
     });
   }

  /* listarMensagens(id: number){
    return new Promise((resolve, reject) =>{
      if(id != null){
      var objeto ={
        id: id
      };
    }else{
      (error) => {
        reject(error);
      }
    }
      this.http.get(this.API_REST_MENSAGEM + objeto.id)
      .subscribe((result: any) => {Local
*/
}
