import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-loginphone',
  templateUrl: 'loginphone.html',
})
export class LoginphonePage {
  phoneNumber: number
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  loginPhone() {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+66" + this.phoneNumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = this.alertCtrl.create({
          title: 'Enter the Confirmation code',
          inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
          buttons: [
            {
              text: 'Cancel',
              handler: data => { console.log('Cancel clicked'); }
            },
            {
              text: 'Send',
              handler: data => {
                confirmationResult.confirm(data.confirmationCode)
                  .then(function (result) {
                    // User signed in successfully.
                    console.log("result: ", result.user);
                    // ...
                  }).catch(function (error) {
                    // User couldn't sign in (bad verification code?)
                    // ...
                  });
                prompt.dismiss().then(() => this.navCtrl.setRoot(HomePage));
              }
            }
          ]
        });
        prompt.present();
      })
      .catch(function (error) {
        console.error("SMS not sent", error);
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
