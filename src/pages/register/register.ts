import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  formgroup: FormGroup;
  email:AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public alertCtrl: AlertController, public formbuilder: FormBuilder) {
  
    this.formgroup = this.formbuilder.group({
      email: ['', Validators.compose([Validators.pattern('[A-Za-z0-9._%+-]{3,}@suksawathospital.com'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];
  
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    this.navCtrl.push(LoginPage);
  }

  async register(user: User) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        this.alert('Registered!');
      })
      .catch(error => {
        this.alert(error.message);
      })
  }

}
