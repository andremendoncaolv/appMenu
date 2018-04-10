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
    this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
    //console.log("LISTA HOME");
    //console.log(this.lista);
  }

}

