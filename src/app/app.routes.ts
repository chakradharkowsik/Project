import { Routes } from '@angular/router';
import { AppComponent, ENFTReportComponent, OnGoingReportComponent } from './index';

export const APPROUTES: Routes = [
    { path: 'enftreport', component: ENFTReportComponent },
    { path: 'ogreport', component: OnGoingReportComponent },
    { path: '', redirectTo:'enftreport',pathMatch:'full' }
];