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

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
     // this.model = new User();
      //this.model.email = this.email
      //this.model.senha = this.senha;
  }

  login(){
    console.log("login()");
    this.userProvider.login(this.email, this.senha)
        .then((result: any) => {
        if(result != null){
          this.navCtrl.push(HomePage);
          this.toast.create({message: "Usuário logado com sucesso Token: " + result.token, position: "botton", duration: 3000}).present();
        }
        
     })
     .catch((error: any) => {
        this.toast.create({message: "Erro ao logar o usuário. " + error.detail, position: "botton", duration: 3000}).present();
      })
  }
  
 
  goToMuralDeMensagens(params){''
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToEsqueciASenha(params){
    console.log("goToEsqueciASenha");
    if (!params) params = {};
    //this.navCtrl.push(HomePage);
  }
  
  
}
export class User{
  email: string;
  senha: string;
}