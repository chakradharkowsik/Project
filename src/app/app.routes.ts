import { Routes } from '@angular/router';
import { AppComponent, ENFTReportComponent, OnGoingReportComponent, NewHireFullTimeComponent } from './index';

export const APPROUTES: Routes = [
    { path: 'enftreport', component: ENFTReportComponent },
    { path: 'ogreport', component: OnGoingReportComponent },
    { path:'nhftreport',component: NewHireFullTimeComponent },
    { path: '', redirectTo:'enftreport',pathMatch:'full' }
];