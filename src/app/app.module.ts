import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { config } from './app.firebase.config';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InformationPage } from '../pages/information/information';
import { EmployeePage } from '../pages/employee/employee';
import { CommentPage } from '../pages/comment/comment';
import { HistoryPage } from '../pages/history/history';
import { MottoPage } from '../pages/motto/motto';
import { InlinkPage } from '../pages/inlink/inlink';
import { OutlinkPage } from '../pages/outlink/outlink';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SettingPage } from '../pages/setting/setting';
import { NewsPage } from '../pages/news/news';
import { ProfilePage } from '../pages/profile/profile';
import { LoginphonePage } from '../pages/loginphone/loginphone';
import { StrategyPage } from '../pages/strategy/strategy';
import { PromotionPage } from '../pages/promotion/promotion';
import { PromoBonePage } from './../pages/promo-bone/promo-bone';
import { PromoDentalPage } from './../pages/promo-dental/promo-dental';
import { PromoHealthChkupPage } from './../pages/promo-health-chkup/promo-health-chkup';
import { PromoHearthPage } from './../pages/promo-hearth/promo-hearth';
import { PromoKidneyPage } from './../pages/promo-kidney/promo-kidney';
import { PromoPedPage } from './../pages/promo-ped/promo-ped';
import { PromoMedPage } from './../pages/promo-med/promo-med';
import { PromoLndPage } from '../pages/promo-lnd/promo-lnd';
import { PromoObsGynPage } from '../pages/promo-obs-gyn/promo-obs-gyn';
import { PromoSurgeryPage } from '../pages/promo-surgery/promo-surgery';
import { NinePriEsbPage } from './../pages/nine-pri-esb/nine-pri-esb';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import 'firebase';

import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    InformationPage,
    EmployeePage,
    CommentPage,
    HistoryPage,
    MottoPage,
    InlinkPage,
    OutlinkPage,
    LoginPage,
    RegisterPage,
    NewsDetailPage,
    ResetPasswordPage,
    SettingPage,
    NewsPage,
    ProfilePage,
    LoginphonePage,
    StrategyPage,
    PromotionPage,
    PromoBonePage,
    PromoDentalPage,
    PromoHealthChkupPage,
    PromoHearthPage,
    PromoKidneyPage,
    PromoPedPage,
    PromoMedPage,
    PromoLndPage,
    PromoObsGynPage,
    PromoSurgeryPage,
    NinePriEsbPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    InformationPage,
    EmployeePage,
    CommentPage,
    HistoryPage,
    MottoPage,
    InlinkPage,
    OutlinkPage,
    LoginPage,
    RegisterPage,
    NewsDetailPage,
    ResetPasswordPage,
    SettingPage,
    NewsPage,
    ProfilePage,
    LoginphonePage,
    StrategyPage,
    PromotionPage,
    PromoBonePage,
    PromoDentalPage,
    PromoHealthChkupPage,
    PromoHearthPage,
    PromoKidneyPage,
    PromoPedPage,
    PromoMedPage,
    PromoLndPage,
    PromoObsGynPage,
    PromoSurgeryPage,
    NinePriEsbPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler,},
    AuthProvider
  ]
})
export class AppModule {}
