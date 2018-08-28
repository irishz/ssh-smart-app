import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  startdate: any;
  now: any = new Date().toISOString();
  thisYear: any = new Date().toISOString();
  employeeType = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public alertCtrl: AlertController, public formbuilder: FormBuilder, private db: AngularFireDatabase) {

    this.formgroup = this.formbuilder.group({
      email: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}'), Validators.required])],
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

  async register(user: User, newName: string, newPosition: string, newDepartment: string, newMobile: string, newEmail: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        this.alert('Registered!');
      })
      .catch(error => {
        this.alert(error.message);
      })

    this.now = moment(this.startdate, "YYYYMMDD").fromNow();
    if (this.now == '2 months ago') {
      this.employeeType = 'new';
    } else {
      this.employeeType = 'old';
    }

    const itemsRef = this.db.list('employee');
    itemsRef.push({
      name: newName,
      position: newPosition,
      department: newDepartment,
      mobile: newMobile,
      email: newEmail,
      startdate: this.startdate,
      type: this.employeeType
    });
  }

}
