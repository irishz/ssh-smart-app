import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoBonePage } from './promo-bone';

@NgModule({
  declarations: [
    PromoBonePage,
  ],
  imports: [
    IonicPageModule.forChild(PromoBonePage),
  ],
})
export class PromoBonePageModule {}
