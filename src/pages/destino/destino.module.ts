import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestinoPage } from './destino';

@NgModule({
  declarations: [
    DestinoPage,
  ],
  imports: [
    IonicPageModule.forChild(DestinoPage),
  ],
})
export class DestinoPageModule {}
