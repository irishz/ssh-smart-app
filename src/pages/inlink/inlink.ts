import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the InlinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inlink',
  templateUrl: 'inlink.html',
})
export class InlinkPage {
  maLinks: Observable<any[]>;
  smcLinks: Observable<any[]>;
  nudLinks: Observable<any[]>;
  ppLinks: Observable<any[]>;
  admisLinks: Observable<any[]>;
  aeLinks: Observable<any[]>;
  opd1Links: Observable<any[]>;
  opd2Links: Observable<any[]>;
  manLinks: Observable<any[]>;
  lndLinks: Observable<any[]>;
  hrLinks: Observable<any[]>;
  labLinks: Observable<any[]>;
  pharLinks: Observable<any[]>;
  ward5Links: Observable<any[]>;
  emsLinks: Observable<any[]>;
  icuLinks: Observable<any[]>;
  pcuLinks: Observable<any[]>;
  xrayLinks: Observable<any[]>;
  ward3Links: Observable<any[]>;
  orLinks: Observable<any[]>;
  ward2Links: Observable<any[]>;
  vehiLinks: Observable<any[]>;
  bdLinks: Observable<any[]>;

  maSta:boolean;
  smcSta:boolean;
  nudSta:boolean;
  ppSta:boolean;
  admisSta:boolean;
  aeSta:boolean;
  opd1Sta:boolean;
  opd2Sta:boolean;
  manSta:boolean;
  lndSta:boolean;
  hrSta:boolean;
  labSta:boolean;
  pharSta:boolean;
  ward5Sta:boolean;
  emsSta:boolean;
  icuSta:boolean;
  pcuSta:boolean;
  xraySta:boolean;
  ward3Sta:boolean;
  orSta:boolean;
  ward2Sta:boolean;
  vehiSta:boolean;
  bdSta:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:AngularFireDatabase) {
    this.maLinks = this.db.list('ma-link').valueChanges();
    this.smcLinks = this.db.list('smc-link').valueChanges();
    this.nudLinks = this.db.list('nud-link').valueChanges();
    this.ppLinks = this.db.list('กายภาพ-link').valueChanges();
    this.admisLinks = this.db.list('admission-link').valueChanges();
    this.aeLinks = this.db.list('ae-link').valueChanges();
    this.opd1Links = this.db.list('opd1-link').valueChanges();
    this.opd2Links = this.db.list('opd2-link').valueChanges();
    this.manLinks = this.db.list('ช่าง-link').valueChanges();
    this.lndLinks = this.db.list('lnd-link').valueChanges();
    this.hrLinks = this.db.list('hr-link').valueChanges();
    this.labLinks = this.db.list('lab-link').valueChanges();
    this.pharLinks = this.db.list('phar-link').valueChanges();
    this.ward5Links = this.db.list('w5-link').valueChanges();
    this.emsLinks = this.db.list('ems-link').valueChanges();
    this.icuLinks = this.db.list('icu-link').valueChanges();
    this.pcuLinks = this.db.list('pcu-link').valueChanges();
    this.xrayLinks = this.db.list('xray-link').valueChanges();
    this.ward3Links = this.db.list('w3-link').valueChanges();
    this.orLinks = this.db.list('or-link').valueChanges();
    this.ward2Links = this.db.list('w2-link').valueChanges();
    this.vehiLinks = this.db.list('vehi-link').valueChanges();
    this.bdLinks = this.db.list('อาคาร-link').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InlinkPage');
  }

  change(){
    
  }

}
