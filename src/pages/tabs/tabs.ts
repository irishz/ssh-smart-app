import { Component } from '@angular/core';
import { InformationPage } from '../information/information';
import { EmployeePage } from '../employee/employee';
import { CommentPage } from '../comment/comment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InformationPage;
  tab2Root = EmployeePage;
  tab3Root = CommentPage;

  constructor() {

  }
}
