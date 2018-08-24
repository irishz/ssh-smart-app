import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newss: Observable<any[]>;
  temp: any;
  // newss: Observable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.newss = db.list('/news').valueChanges();
  }


  see(item) {
    this.navCtrl.push(NewsDetailPage, item);
  }
}

