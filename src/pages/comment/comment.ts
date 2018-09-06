import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private db: AngularFireDatabase) {
  }

  submit(newContent: string) {
    let alert = this.alertCtrl.create({
      title: 'สำเร็จ!',
      subTitle: 'ขอบคุณสำหรับคำติชม เราจะนำไปปรับปรุงแอพพลิเคชันให้ดียิ่งขึ้น',
      buttons: ['ตกลง']
    });
    alert.present();

      // Change property database
    const itemsRef = this.db.list('survey');
    itemsRef.push({
      name: newContent,
     });
  }

}
