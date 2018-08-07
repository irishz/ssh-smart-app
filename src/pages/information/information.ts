import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { MottoPage } from '../motto/motto';
import { InlinkPage } from '../inlink/inlink';
import { OutlinkPage } from '../outlink/outlink';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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

  inlink(){
    this.navCtrl.push(InlinkPage);
  }

  outlink(){
    this.navCtrl.push(OutlinkPage);
  }

}
