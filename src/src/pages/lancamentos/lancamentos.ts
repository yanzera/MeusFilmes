import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


/**
 * Generated class for the LancamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
  providers: [
    MovieProvider
  ]
})
export class LancamentosPage {

  public filme = new Array<any>();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.filme = objeto_retorno;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
