import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { FilmeProvider } from '../../providers/filme/filme';
import { AtualizaFilmePage } from '../atualiza-filme/atualiza-filme';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the ExibeFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-filme',
  templateUrl: 'exibe-filme.html',
  providers: [
    MovieProvider
  ]
})
export class ExibeFilmePage {
  public filme:Filme[]; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private filmeProvider:FilmeProvider,private toastCtrl: ToastController,
    private movieProvider: MovieProvider) {
  }
  exibirToast (dados){
    let t = this.toastCtrl.create ({
    message: dados,
    duration: 3000,
    position: "top"
    });
    t.present();
    }

    ionViewDidLoad() {
      this.movieProvider.getMovie().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.filme = objeto_retorno.movie;
          console.log(this.filme);
          console.log(objeto_retorno);
        }, error => {
          console.log(error);
        }
      )
    }

    getList() {
      this.movieProvider.getList().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.filme = objeto_retorno.movie;
          console.log(this.filme);
          console.log(objeto_retorno);
        }, error => {
          console.log(error);
        }
      )
    }

    listaFilme(filme:Filme){
      this.filmeProvider.listar();
      this.exibirToast ("Filme apagado com sucesso");
      this.filmeProvider.listar().
      then((filme:Filme []) =>{
      this.filme = filme;
      });
    }

    apagaFilme (filme:Filme){
      this.filmeProvider.apagar (filme);
      this.exibirToast ("Filme apagado com sucesso");
      //para atualizar alista que está sendo exibida
      this.filmeProvider.listar().
      then((filme:Filme []) =>{
      this.filme = filme;
      });
      }
      atualizaFilme (filme:Filme){
        this.navCtrl.push(AtualizaFilmePage, filme);
        }
}
