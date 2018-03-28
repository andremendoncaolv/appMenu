import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lista_mensagens = new Array<any>();
  public lista = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.lista_mensagens = this.navParams.get('listaMensagens');
    this.lista = this.navParams.get('lista');
    console.log(this.lista);
  }

}

