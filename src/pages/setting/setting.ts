import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';

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

  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth) {
  }

  commentPage(){
    this.navCtrl.push(CommentPage);
  }

  editPage(){
    this.navCtrl.push(ProfilePage);
  }

  async logout(): Promise<void>{
    return this.afAuth.auth.signOut().then(() => {
      this.app.getRootNav().setRoot(LoginPage);
    })
  }

}
