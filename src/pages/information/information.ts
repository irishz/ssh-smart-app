import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { MottoPage } from '../motto/motto';
import { InlinkPage } from '../inlink/inlink';
import { OutlinkPage } from '../outlink/outlink';
import { StrategyPage } from '../strategy/strategy';
import { PromotionPage } from '../promotion/promotion';
import { NinePriEsbPage } from '../nine-pri-esb/nine-pri-esb';
import { ChkpriPage } from '../chkpri/chkpri';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  goHistory(){
    const toast = this.toastCtrl.create({
      message: 'History page!',
      duration: 2000
    });
    toast.present();
    this.navCtrl.push(HistoryPage);
  }

  goMotto(){
    const toast = this.toastCtrl.create({
      message: 'Motto page!',
      duration: 2000
    });
    toast.present();
    this.navCtrl.push(MottoPage);
  }

  strategy(){
    const toast = this.toastCtrl.create({
      message: 'Stategy page!',
      duration: 2000
    });
    toast.present();
    this.navCtrl.push(StrategyPage);
  }

  inlink(){
    this.navCtrl.push(InlinkPage);
  }

  outlink(){
    this.navCtrl.push(OutlinkPage);
  }

  promotion(){
    this.navCtrl.push(PromotionPage);
  }

  training(){
    this.navCtrl.push(NinePriEsbPage);
  }

  chkpri(){
    this.navCtrl.push(ChkpriPage);
  }

  
}
