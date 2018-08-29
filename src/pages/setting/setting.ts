import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public appCtrl: App,public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth) {
  }

  commentPage(){
    this.navCtrl.push(CommentPage);
  }

  editPage(){
    this.navCtrl.push(ProfilePage);
  }

  async logout(): Promise<void>{
    return this.afAuth.auth.signOut().then(() => {
      this.appCtrl.getRootNav().setRoot(LoginPage);
    })
  }

}
