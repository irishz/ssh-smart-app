import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  startdate: any = 1540198256055;
  now: string = new Date().toISOString();
  employeeType = '';
  department: any = '';
  case: any;
  departlists = [
    { name: 'ศูนย์จัดการยุทธศาสตร์องค์กร', val: 'SMC' },
    { name: 'การพยาบาล', val: 'NUR' },
    { name: 'แผนกผู้ป่วยนอก(ประกันสังคม)', val: 'OPD1' },
    { name: 'แผนกผู้ป่วยนอก(Premium)', val: 'OPD2' },
    { name: 'แผนกอุบัติเหตุ-ฉุกเฉิน(A&E)', val: 'ARE' },
    { name: 'แผนกรับส่งผู้ป่วย', val: 'TRD' },
    { name: 'แผนกยานพาหนะ', val: 'VEH' },
    { name: 'แผนกสร้างเสริมสุขภาพ (PP)', val: 'PRP' },
    { name: 'แผนกบริการปฐมภูมิ (PCU)', val: 'PCU' },
    { name: 'หอผู้ป่วยในชั้น 2 (IPD 2)', val: 'IPD2' },
    { name: 'หอผู้ป่วยในชั้น 3 (IPD 3)', val: 'IPD3' },
    { name: 'หอผู้ป่วยในชั้น 4 (IPD 4)', val: 'IPD4' },
    { name: 'หอผู้ป่วยในชั้น 5 (IPD 5)', val: 'IPD5' },
    { name: 'หอผู้ป่วยหนัก(Special Unit)', val: 'ICU' },
    { name: 'แผนกห้องคลอดและทารกแรกเกิด (Special Unit)', val: 'LND' },
    { name: 'แผนกห้องผ่าตัด (Special Unit)', val: 'ORD' },
    { name: 'ศูนย์ไตเทียม', val: 'HDD' },
    { name: 'แผนกรังสีวิทยา (X-Ray)', val: 'RAD' },
    { name: 'แผนกเภสัชกรรม', val: 'PHA' },
    { name: 'แผนกกายภาพบำบัด', val: 'PHY' },
    { name: 'แผนกทันตกรรม', val: 'DEN' },
    { name: 'แผนกโภชนาการ', val: 'NUD' },
    { name: 'แผนกบริหารทรัพยากรทางการแพทย์', val: 'UMD' },
    { name: 'แผนกลูกค้าประกัน/ลูกค้าสัมพันธ์', val: 'CRM' },
    { name: 'แผนกสิทธิประโยชน์', val: 'ADM' },
    { name: 'แผนกเวชระเบียนและเวชสถิติ', val: 'MRD' },
    { name: 'แผนกบัญชี', val: 'ACC' },
    { name: 'แผนกการเงิน', val: 'FIN' },
    { name: 'แผนกเคลมเซ็นเตอร์', val: 'CLA' },
    { name: 'แผนกตรวจสุขภาพเคลื่อนที่', val: 'MOU' },
    { name: 'แผนกบริหารบุคลากร', val: 'HRD' },
    { name: 'แผนกจัดซื้อ-พัสดุ', val: 'PUD' },
    { name: 'ศูนย์คอมพิวเตอร์ (IT)', val: 'ITD' },
    { name: 'แผนกอาคารสถานที่', val: 'HKD' },
    { name: 'หน่วยเครื่องมือแพทย์', val: 'TEC' },
    { name: 'แผนกซ่อมบำรุง', val: 'ENG ' },
    { name: 'การขายและการตลาด', val: 'SAM ' },
    { name: 'หน่วย OCC', val: 'OCC ' },
  ];

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

  async register(user: User, newName: string, newPosition: string, newMobile: string) {
    // await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    //   .then(data => {
    //     this.alert('Registered!');
    //   })
    //   .catch(error => {
    //     this.alert(error.message);
    //   })

    // Log chekc User email
      // console.log("Email:",this.user.email);

    var timeDiff = Math.abs(Date.now() - this.startdate);
    console.log(Date.now());

    console.log("timeDiff: ", timeDiff);
    

    // const itemsRef = 
    // this.db.list('employee')
    // .push({
    //   name: newName,
    //   position: newPosition,
    //   department: this.department,
    //   mobile: newMobile,
    //   email: this.user.email,
    //   startdate: this.startdate,
    //   type: this.employeeType
    // });

    // Log check add employee data to firebase
    // console.log("Email:",this.user.email,"mobile:",newMobile,"depart:",this.department,"name:",newName,"pos:",newPosition);
    
  }

}
