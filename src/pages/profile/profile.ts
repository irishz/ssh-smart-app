import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userEmail: any;
  userMobile: any;
  items: Observable<any[]>;
  key: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private db: AngularFireDatabase, private toastCtrl: ToastController) {
    this.userEmail = this.afAuth.auth.currentUser.email;
    this.items = this.db.list('employee', ref => ref.orderByChild('email').equalTo(this.userEmail)).valueChanges();
  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Update successfully!',
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  update(newName: string, newPos: string, newDept: string, newMobile: string) {
    this.key = this.db.list('employee', ref => ref.orderByChild('email').equalTo(this.userEmail)).snapshotChanges()
      .subscribe(dataKeys => {
        dataKeys.forEach(datakey => {
          const itemsRef = this.db.list('employee');
          itemsRef.update(datakey.key, {
            name: newName,
            position: newPos,
            department: newDept,
            mobile: newMobile,
          });
        })
      });
    this.navCtrl.popTo(this.navCtrl.getActive().component);
  }

}
