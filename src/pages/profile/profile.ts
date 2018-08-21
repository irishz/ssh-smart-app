import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userEmail: any;
  items: Observable<any[]>;
  ref: Observable<any[]>;
  temp: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.userEmail = this.afAuth.auth.currentUser.email;
    this.items = this.db.list('employee', ref => ref.orderByChild('email').equalTo(this.userEmail)).valueChanges();
  }

  ionViewDidLoad() {
    console.log(this.items); 
  }

  update(){
    
  }
}
