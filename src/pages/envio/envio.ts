import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, DateTime } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the EnvioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-envio',
  templateUrl: 'envio.html',
})
export class EnvioPage {
  
  private tituloEnvio: string;
  private textoEnvio: string;
  private destinatarioEnvio: number;
  private remetente : number;
  private mensagemEnviada = new Array<any>();

  private testeRemetente = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
      this.testeRemetente = JSON.parse(localStorage.getItem("remetente"));
      console.log(this.testeRemetente);
  }

  enviarMensagem(){
    this.userProvider.enviarMensagem(this.tituloEnvio, this.textoEnvio, this.destinatarioEnvio, this.remetente)
      .then((result: any) => {
        this.mensagemEnviada = result;
      });
  }
}

export class listaMensagemEnvio{
  data: DateTime;
  tituloEnvio: string;
  textoEnvio: string;
  remetenteEnvio: number;
  destinatarioEnvio: number;
}