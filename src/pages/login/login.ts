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
  }

  login(){    
    this.userProvider.login(this.email, this.senha)
        .then((result: any) => {
        if(!isEmpty(result)){          
          this.navCtrl.push(HomePage);
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