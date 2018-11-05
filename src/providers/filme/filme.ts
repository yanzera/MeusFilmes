import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Filme } from '../../model/filmes';
import { SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmeProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }
  public inserir (filme: Filme){
    return this.dbProvider.openDatabase().
    then((db: SQLiteObject)=>{
    let sql = "INSERT INTO filme (titulo, direcao, descricao, genero, popularidade, lancamento) VALUES (?, ?, ?, ?, ?, ?)";
    let parametros = [filme.titulo, filme.direcao, filme.descricao, filme.genero, filme.popularidade, filme.lancamento];
    return db.executeSql (sql, parametros).
    catch ((e) => {
    console.log(e);
    });
    }).catch ((e)=>{
    console.log(e);
    });
    }

  public listar (){
      //abre a base
      return this.dbProvider.openDatabase().
      then((db: SQLiteObject)=>{
      //faz o select
      let sql = "SELECT * FROM filme";
      return db.executeSql (sql, []).
      then((data: any) =>{
      //se tiver alguma linha na tabela
      if (data.rows.length > 0){
      let filme: Filme[] = [];
      //pega cada linha e coloca num vetor
      for (let i = 0; i < data.rows.length; i++){
     filme.push(data.rows.item(i));
      }
      return filme;
      }
      else
      //devolve vetor vazio se a tabela estiver vazia
      return [];
      });
      }).catch((e) =>{
      console.log(e);
      });
      }

  public apagar (filme:Filme){
        return this.dbProvider.openDatabase().
        then((db: SQLiteObject)=>{
        let sql = "DELETE FROM filme WHERE id = ?";
        //será colocado no lugar do ?
        let param = [filme.id];
        return db.executeSql (sql, param);
        });
        }
  public atualizar (filme:Filme){
          return this.dbProvider.openDatabase().
          then((db: SQLiteObject)=>{
          let sql = "UPDATE filme SET titulo = ?, direcao = ?, descricao = ?, genero = ?, popularidade = ?, lancamento = ? WHERE id = ?";
          let param = [filme.titulo, filme.direcao, filme.descricao, filme.genero, filme.popularidade, filme.lancamento, filme.id];
          return db.executeSql(sql, param);
          });
          }        
}
