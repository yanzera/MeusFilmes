import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GeneroPage } from '../genero/genero';
import { LancamentosPage } from '../lancamentos/lancamentos';
import{PopularidadePage} from '../popularidade/popularidade'



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = GeneroPage;
  tab3Root = LancamentosPage;
  tab4Root = PopularidadePage;

  constructor() {

  }
}
