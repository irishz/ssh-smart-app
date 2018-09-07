import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { LoginphonePage } from '../loginphone/loginphone';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  isUserLoggedIn: any = false;
  UserInfo: any = {};
  phone: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private afAuth: AngularFireAuth,public modalCtrl: ModalController) {

  }

  // alert(message: string) {
  //   this.alertCtrl.create({
  //     title: 'Info',
  //     subTitle: message,
  //     buttons: ['OK']
  //   }).present();
  // }

  async login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(data => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        // this.alert(error.message);
      })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  // loginFB() {
  //   this.fb.login(['email','public_profile']).then((loginRes: FacebookLoginResponse) => {
  //     this.navCtrl.push(HomePage);
  //     this.fb.api('me/?=id,name,email,First_name',[]).then(profile =>{
  //       this.UserInfo = {
  //         email: profile['email'],
  //         first_name: profile['first_name'],
  //       }
  //       this.isUserLoggedIn = true;
  //     })
  //   })
  // }

  loginphone() {
    let myModal = this.modalCtrl.create(LoginphonePage);
    myModal.present();
  }

}
