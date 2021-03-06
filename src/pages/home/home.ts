import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NewsDetailPage } from '../news-detail/news-detail';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  constructor(public navCtrl: NavController,private db: AngularFireDatabase, public modalCtrl: ModalController) {
    this.items = this.db.list('news').valueChanges();
  }

  detail(item: any){
    const modal = this.modalCtrl.create(NewsDetailPage , item);
    modal.present();
  }

  goTab(){
    this.navCtrl.push(TabsPage)
  }

}
