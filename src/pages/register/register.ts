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
  startdate: any;
  now: any = new Date().toISOString();
  thisYear: any = new Date().toISOString();
  employeeType = '';
  department: any = '';
  departlists = [
    { name: 'Call Center', val: 'OCC' },
    { name: 'IT', val: 'ITD' },
    { name: 'กายภาพบำบัด', val: 'PHY' },
    { name: 'การขายและการตลาด', val: 'MKT' },
    { name: 'การเงิน', val: 'FIN' },
    { name: 'เคลมเซ็นเตอร์', val: 'CLA' },
    { name: 'คลังสินค้า-พัสดุ', val: 'PUD' },
    { name: 'ช่างซ่อมบำรุง', val: 'ENG' },
    { name: 'ทันตกรรม', val: 'DEN' },
    { name: 'ธุรการ', val: 'ADMIN' },
    { name: 'ธุรการ/เลขา', val: 'SEC' },
    { name: 'หน่วยบริการปฐมภูมิ', val: 'PCU' },
    { name: 'บริหาร', val: 'MNG' },
    { name: 'บริหารทรัพยากรทางการแพทย์', val: 'UMD' },
    { name: 'บัญชี', val: 'ACC' },
    { name: 'ประกันและลูกค้าสัมพันธ์ (CRM)', val: 'CRM' },
    { name: 'ผู้ป่วยนอก (Premium) (OPD2)', val: 'OPD2' },
    { name: 'ผู้ป่วยนอก (ประกันสังคม) (OPD1)', val: 'OPD1' },
    { name: 'เภสัชกรรม', val: 'PHA' },
    { name: 'โภชนาการ', val: 'NUD' },
    { name: 'ยานพาหนะ (VEH)', val: 'VEH' },
    { name: 'รังสีวิทยา (X-Ray)', val: 'xray' },
    { name: 'รับ-ส่งผู้ป่วย (TRD)', val: 'TRD' },
    { name: 'เวชระเบียนและเวชสถิติ', val: 'MRD' },
    { name: 'ศูนย์จัดการยุทธศาสตร์องค์กร(SMC)', val: 'SMC' },
    { name: 'ศูนย์พัฒนาคุณภาพองค์กร', val: 'QIC' },
    { name: 'สิทธิประโยชน์', val: 'ADM' },
    { name: 'รักษาความปลอดภัย', val: 'SCR' },
    { name: 'ห้องคลอดและทารกแรกเกิด(LND) Special Unit', val: 'LND' },
    { name: 'ห้องผ่าตัด(ORD) Special Unit', val: 'ORD' },
    { name: 'หอผู้ป่วย VIP ชั้น 5 (IPD 5)', val: 'IPD5' },
    { name: 'หอผู้ป่วยในชั้น 2 (IPD 2)', val: 'IPD2' },
    { name: 'หอผู้ป่วยในชั้น 3 (IPD 3)', val: 'IPD3' },
    { name: 'หอผู้ป่วยในชั้น 4 (IPD 4)', val: 'IPD4' },
    { name: 'หอผู้ป่วยหนัก (ICU) Special Unit', val: 'ICU' },
    { name: 'อาคารสถานที่', val: 'BUD' },
    { name: 'อุบัติเหตุ - ฉุกเฉิน (A&E)', val: 'A&E' },
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
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        this.alert('Registered!');
      })
      .catch(error => {
        this.alert(error.message);
      })

    // Log chekc User email
      // console.log("Email:",this.user.email);

    this.now = moment(this.startdate, "YYYYMMDD").fromNow();
    if(this.now >= '1 days ago' && this.now <= '31 days ago'){
      this.employeeType = 'new';
    }else{
      this.employeeType = 'old';
    }
    // Log check employee type
    // console.log(this.now);
    // console.log(this.employeeType);

    // const itemsRef = 
    this.db.list('employee')
    .push({
      name: newName,
      position: newPosition,
      department: this.department,
      mobile: newMobile,
      email: this.user.email,
      startdate: this.startdate,
      type: this.employeeType
    });

    // Log check add employee data to firebase
    // console.log("Email:",this.user.email,"mobile:",newMobile,"depart:",this.department,"name:",newName,"pos:",newPosition);
    
  }

  // test get&calculate employeetype
  testdate(){
    this.now = moment(this.startdate, "YYYYMM").fromNow();
    if(this.now >= '1 days ago' && this.now <= '31 days ago'){
      this.employeeType = 'new';
    }else{
      this.employeeType = 'old';
    }
  
  }

}
