import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword(user: User) {
    console.log(user.email);
    this.afAuth.auth.sendPasswordResetEmail(user.email);
    
    let alert = this.alertCtrl.create({
      title: 'สำเร็จ!',
      subTitle: 'ส่งรหัสผ่านใหม่เรียบร้อย กรุณาตรวจสอบอีเมลของท่าน',
      buttons: ['ตกลง']
    });
    alert.present();
  }

}

