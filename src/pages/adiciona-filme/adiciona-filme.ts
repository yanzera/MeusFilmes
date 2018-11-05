import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { FilmeProvider } from '../../providers/filme/filme';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AdicionaFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-filme',
  templateUrl: 'adiciona-filme.html',
})
export class AdicionaFilmePage {

  public filme:Filme;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private filmeProvider:FilmeProvider,private toastCtrl: ToastController ) {
  this.filme = new Filme ();
  }
  exibirToast (dados){
    let t = this.toastCtrl.create ({
    message: dados,
    duration: 3000,
    position: "top"
    });
    t.present();
    }
  cadastraFilme(){
  this.filmeProvider.inserir(this.filme);
  this.exibirToast ("Filme cadastrado com sucesso.");
  this.navCtrl.pop();
    }

}
