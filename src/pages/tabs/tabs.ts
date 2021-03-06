import { Component } from '@angular/core';
import { InformationPage } from '../information/information';
import { EmployeePage } from '../employee/employee';
import { SettingPage } from '../setting/setting';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = InformationPage;
  tab3Root = EmployeePage;
  tab4Root = SettingPage;

  constructor() {

  }
}
