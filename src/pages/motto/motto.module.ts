import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MottoPage } from './motto';

@NgModule({
  declarations: [
    MottoPage,
  ],
  imports: [
    IonicPageModule.forChild(MottoPage),
  ],
})
export class MottoPageModule {}
