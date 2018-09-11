import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-motto',
  templateUrl: 'motto.html',
})
export class MottoPage {
  photo: any = "assets/imgs/motto.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  openModal() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photo,
    });
    modal.present();
  }

}
