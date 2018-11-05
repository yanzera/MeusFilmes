import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeFilmePage } from './exibe-filme';

@NgModule({
  declarations: [
    ExibeFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeFilmePage),
  ],
})
export class ExibeFilmePageModule {}
