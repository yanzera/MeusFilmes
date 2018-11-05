import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the PopularidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
  providers: [
    MovieProvider
  ]
})
export class PopularidadePage {
  
  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
    data => {
    const response = (data as any);
    const objeto_retorno = JSON.parse(response._body);
    this.lista_filmes = objeto_retorno.results;
    console.log(objeto_retorno);
    }, error => {
    console.log(error);
    }
    )
    }
}
