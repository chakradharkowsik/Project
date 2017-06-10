import { Routes } from '@angular/router';
import {
    AppComponent, ENFTReportComponent, OnGoingReportComponent,
    NewHireFullTimeComponent, DashboardComponent, LoginComponent, TopNavComponent,
    SideNavComponent
} from './index';

export const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'aca', component: AppComponent },  
    {
        path: 'aca', children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'enftreport', component: ENFTReportComponent },
            { path: 'ogreport', component: OnGoingReportComponent },
            { path: 'nhftreport', component: NewHireFullTimeComponent },
            { path: '', component: TopNavComponent, outlet: 'header' },
            { path: '', component: SideNavComponent, outlet: 'sidebar' }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];