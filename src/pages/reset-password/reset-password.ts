import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  user = {} as User;

  public type = 'password';
  public showPass = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword(user: User) {
    
    this.afAuth.auth.sendPasswordResetEmail(user.email);

    let alert = this.alertCtrl.create({
      title: 'สำเร็จ!',
      subTitle: 'ส่งรหัสผ่านใหม่เรียบร้อย กรุณาตรวจสอบอีเมลของท่าน',
      buttons: ['ตกลง']
    });
    alert.present();
    console.log(user.email);
  }

}

