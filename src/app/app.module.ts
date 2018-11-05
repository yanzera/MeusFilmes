import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home';
import { LancamentosPage } from '../pages/lancamentos/lancamentos';
import{PopularidadePage} from '../pages/popularidade/popularidade'
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { GeneroPageModule } from '../pages/genero/genero.module';
import {HttpModule} from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';
import {SQLite} from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { FilmeProvider } from '../providers/filme/filme';
import { AdicionaFilmePage } from '../pages/adiciona-filme/adiciona-filme';
import { ExibeFilmePage } from '../pages/exibe-filme/exibe-filme';
import { AtualizaFilmePage } from '../pages/atualiza-filme/atualiza-filme';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopularidadePage,
    LancamentosPage,
    TabsPage,
    AdicionaFilmePage,
    ExibeFilmePage,
    AtualizaFilmePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    GeneroPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopularidadePage,
    LancamentosPage,
    TabsPage,
    AdicionaFilmePage,
    ExibeFilmePage,
    AtualizaFilmePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    SQLite,
    DatabaseProvider,
    FilmeProvider,
   
  ]
})
export class AppModule {}
