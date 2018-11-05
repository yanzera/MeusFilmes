
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db : SQLite) {
  }
  openDatabase (){
    return this.db.create ({
    name:"filmes.db",
    location: "default"
    });
    }
    createDatabase (){
      return this.openDatabase ().
      then((db: SQLiteObject) =>{
      this.createTabelaFilmes(db);
      });
      }
      createTabelaFilmes (db: SQLiteObject){
      let sql: string = "CREATE TABLE IF NOT EXISTS filme (id INTEGER PRIMARY KEY AUTOINCREMENT, " +
      " titulo VARCHAR (200), direcao VARCHAR(200), descricao VARCHAR(200), genero VARCHAR(200), popularidade NUMBER(3), lancamento DATATIME)";
      db.executeSql (sql);//{poderia conter parâmetros, por isso o {}}
      }
}
