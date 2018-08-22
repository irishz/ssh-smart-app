import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  ref: AngularFireList<any[]>;
  keyStore: any;
  toast: any;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private db: AngularFireDatabase, private toastCtrl: ToastController) {
    this.userEmail = this.afAuth.auth.currentUser.email;
    this.items = this.db.list('employee', ref => ref.orderByChild('email').equalTo(this.userEmail)).valueChanges();
    this.keyStore = this.db.list('employee', ref => ref.orderByChild('email').equalTo(this.userEmail)).valueChanges().subscribe(res => {
      console.log('res_array:', res);
    });
  }

  ionViewDidLoad() {
    console.log('key:', this.keyStore.$key);
  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Update successfully!',
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  update(newName: string,newPos: string, newDept: string, newMobile: string) {
    const itemsRef = this.db.list('employee');
    itemsRef.update('-LKPGKZWr3yHDpLv6oPy', { 
      name: newName,
      position: newPos,
      department: newDept,
      mobile: newMobile,
    });
    this.navCtrl.popTo(this.navCtrl.getActive().component);
  }

}
