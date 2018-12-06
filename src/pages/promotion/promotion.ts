import { PromoSurgeryPage } from './../promo-surgery/promo-surgery';
import { PromoPedPage } from './../promo-ped/promo-ped';
import { PromoObsGynPage } from './../promo-obs-gyn/promo-obs-gyn';
import { PromoMedPage } from './../promo-med/promo-med';
import { PromoLndPage } from './../promo-lnd/promo-lnd';
import { PromoKidneyPage } from './../promo-kidney/promo-kidney';
import { PromoHearthPage } from './../promo-hearth/promo-hearth';
import { PromoHealthChkupPage } from './../promo-health-chkup/promo-health-chkup';
import { PromoDentalPage } from './../promo-dental/promo-dental';
import { PromoBonePage } from './../promo-bone/promo-bone';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, App } from 'ionic-angular';
/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})

export class PromotionPage {
  pages = [
    { fncName: 'bone', title: 'ศูนย์กระดูกและข้อ' },
    { fncName: 'dental', title: 'ศูนย์ทันตกรรม' },
    { fncName: 'health-chkup', title: 'ศูนย์ตรวจสุขภาพ' },
    { fncName: 'hearth', title: 'ศูนย์หัวใจ' },
    { fncName: 'kidney', title: 'ศูนย์ไตเทียม' },
    { fncName: 'lnd', title: 'ศูนย์เตรียมความพร้อมเพื่อการมีบุตร' },
    { fncName: 'med', title: 'ศูนย์อายุรกรรม' },
    { fncName: 'obs-gyn', title: 'ศูนย์สูตินรีเวช' },
    { fncName: 'ped', title: 'ศูนย์กุมารเวช' },
    { fncName: 'surgery', title: 'ศูนย์ศัลยกรรม' },
  ];
  constructor(public navCtrl: NavController) {

  }

  openpage(temp: string) {
    switch (temp) {
      case 'bone':
        this.navCtrl.push(PromoBonePage);
        break;
      case 'dental':
        this.navCtrl.push(PromoDentalPage);
        break;
      case 'health-chkup':
        this.navCtrl.push(PromoHealthChkupPage);
        break;
      case 'hearth':
        this.navCtrl.push(PromoHearthPage);
        break;
      case 'kidney':
        this.navCtrl.push(PromoKidneyPage);
        break;
      case 'lnd':
        this.navCtrl.push(PromoLndPage);
        break;
      case 'med':
        this.navCtrl.push(PromoMedPage);
        break;
      case 'obs-gyn':
        this.navCtrl.push(PromoObsGynPage);
        break;
      case 'ped':
        this.navCtrl.push(PromoPedPage);
        break;
      case 'surgery':
        this.navCtrl.push(PromoSurgeryPage);
        break;
      default:
    }
  }

}
