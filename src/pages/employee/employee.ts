import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {

    this.items = this.db.list('employee', ref => ref.orderByChild('type').equalTo('new')).valueChanges();
  }

}
