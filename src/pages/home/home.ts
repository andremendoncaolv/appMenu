import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lista_mensagens = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("construtor home");
    this.lista_mensagens = this.navParams.get("listaMensagens");
    console.log(this.lista_mensagens);
  }

}
