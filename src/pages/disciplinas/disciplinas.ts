import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-list',
  templateUrl: 'disciplinas.html'
})
export class DisciplinasPage {

  private lista = new Array<any>();
  private listaDisciplinas = new Array<any>();

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private userProvider: UsersProvider) {
      this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
      //console.log("Lista disciplinas");
      this.consultasDisciplinas(this.lista[0].idAluno);
      //console.log(this.lista);
    // this.consultasDisciplinas(this.lista[0].idAluno);
  }

  /*
    MÉTODO PARA CONSULTAR DISCIPLINAS
  */
  consultasDisciplinas(id: number){
    this.userProvider.listarDisciplinas(id)
    .then((result: any) => {
    this.listaDisciplinas = result;
    console.log("Lista disciplinas");
    console.log(this.listaDisciplinas);
  });
  }
}
