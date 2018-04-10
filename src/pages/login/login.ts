import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;
  private usuarioLogado: any;
  private listaMensagens = new Array<any>();
  private listaUsuarios = new Array<any>();
  private lista = new Array<any>();

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
  }

  login(){    
    this.userProvider.login(this.email, this.senha)
        .then((result: any) => {
          this.usuarioLogado = result;
        if(!isEmpty(this.usuarioLogado[0])){    
          this.consultaUsuarios();
          this.consultaMensagem(this.usuarioLogado[0].id) ;      
         
          this.toast.create({message: "Usuário logado com sucesso. ", duration: 3000}).present();
        }else{
          this.toast.create({message: "Erro ao tentar logar.", duration: 3000}).present();
        }        
     })
     .catch((error: any) => {
        this.toast.create({message: "Erro ao tentar logar.", duration: 3000}).present();
      })

      /*
        Valida se o objeto esta preenchido.
      */
      function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }
  }
  consultaMensagem(id: number){
    this.userProvider.listarMensagens(id)
      .then((result: any) =>{
        this.listaMensagens = result;

        var i;
        var obj;
        var j = 0;
        var r = 0;
        for(i=0; i < this.listaMensagens.length; i++){
          for(j=0; j < this.listaUsuarios.length; j++){
            if (this.listaMensagens[i].remetente == this.listaUsuarios[j].id){
              obj = {
                idAluno: this.usuarioLogado[0].id,
                tituloMensagem: this.listaMensagens[i].titulo,
                textoMensagem: this.listaMensagens[i].texto,
                nomeRemetente: this.listaUsuarios[j].nome,
                dataEnvioMensagem: this.listaMensagens[i].data
              }
              this.lista[r] = obj;
              r++;
            }
          }
         }
        this.navCtrl.push(HomePage, {listaMensagens: this.listaMensagens, lista: this.lista});
         /*
          Objeto JavaScript que usamos para armazenar dados no navegador.
         */
         localStorage.setItem('listaObjetos',JSON.stringify(this.lista));
    })
  }

  consultaUsuarios(){
    this.userProvider.listarUsuarios()
    .then((result: any) =>{
      this.listaUsuarios = result;
  })
  }
  
  
}
export class listaRetorno{
  idAluno: string // usuario
  email: string; //usuario
  senha: string; //usuario
  nomeRemetente: string; //lista de usuarios
  emailRemetente: string;
  cargoRemetente: string;
  tituloMensagem: string;
  textoMensagem: string;
  dataMensagem: string;
  nomeUsuario: string

}