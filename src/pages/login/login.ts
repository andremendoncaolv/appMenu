import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /**goToHome(){
    this.navCtrl.push(HomePage);
  }*/
  goToMuralDeMensagens(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToEsqueciASenha(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  
}
