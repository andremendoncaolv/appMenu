import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: User;
  email: string;
  senha: string;
  private usuarioLogado: any;
  private listaMensagens = new Array<any>();
  private listaUsuarios = new Array<any>();

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
  }

  login(){    
    this.userProvider.login(this.email, this.senha)
        .then((result: any) => {
          this.usuarioLogado = result;
        if(!isEmpty(this.usuarioLogado[0])){    
          
          this.consultaMensagem(this.usuarioLogado[0].id) ;      
          /*this.navCtrl.push(HomePage);
          this.userProvider.listarMensagens(this.usuarioLogado[0].id)

            .then((result: any) =>{
            this.listaMensagens = result;
            })
            */
          this.toast.create({message: "Usuário logado com sucesso. ", duration: 3000}).present();
        }else{
          this.toast.create({message: "Erro ao tentar logar.", duration: 3000}).present();
        }        
     })
     .catch((error: any) => {
        this.toast.create({message: "Erro ao tentar logar.", duration: 3000}).present();
      })

      //Valida se o objeto esta preenchido.
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
        console.log("passei aqui");
        console.log(this.listaMensagens);
        this.consultaUsuarios();
        this.navCtrl.push(HomePage, {listaMensagens: this.listaMensagens});
    })
  }

  consultaUsuarios(){
    this.userProvider.listarUsuarios()
    .then((result: any) =>{
      this.listaUsuarios = result;

      
      console.log("lista usuario");
      console.log(this.listaUsuarios);
      //this.navCtrl.push(HomePage, {listaMensagens: this.listaMensagens});
  })
  }
 
  goToMuralDeMensagens(params){''
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  
  /*goToEsqueciASenha(params){
    console.log("goToEsqueciASenha");
    if (!params) params = {};
    //this.navCtrl.push(HomePage);
  }
  */
  
  
}
export class User{
  email: string;
  senha: string;
}