import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionaFilmePage } from '../adiciona-filme/adiciona-filme';
import { ExibeFilmePage } from '../exibe-filme/exibe-filme';
//Parei no passo 31 (teste) do pdf
/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  cadastrarFilme(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
    this.navCtrl.push(AdicionaFilmePage);
  }
  exibirFilme (){
    this.navCtrl.push(ExibeFilmePage);
    }
}
