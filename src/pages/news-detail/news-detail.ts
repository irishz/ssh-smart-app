import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {

  title: any;
  img: any;
  content: any;
  datetime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
    this.title = this.navParams.get('title');
    this.img = this.navParams.get('img');
    this.content = this.navParams.get('content');
    this.datetime = this.navParams.get('datetime');
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('title'));
    
  }

  closeModal(){
    this.view.dismiss();
  }

}
