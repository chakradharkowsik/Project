import { Routes } from '@angular/router';
import {
    AppComponent, ENFTReportComponent, OnGoingReportComponent,
    NewHireFullTimeComponent, PayrollDataActivityReportComponent,
    DashboardComponent, LoginComponent, TopNavComponent,
    ErCoverageReportComponent,
    EmployeeEligibilityReportComponent,
    EmployeeDemographicReportComponent,
    EmployeeBreakInServiceReportComponent,
    SideNavComponent
} from './index';

export const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'reporting', component: AppComponent },
    {
        path: 'reporting', children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'enftreport', component: ENFTReportComponent },
            { path: 'ogreport', component: OnGoingReportComponent },
            { path: 'nhftreport', component: NewHireFullTimeComponent },
            { path: 'pdareport', component: PayrollDataActivityReportComponent },
            { path: 'ercreport', component: ErCoverageReportComponent },
            { path: 'empeligilbility', component: EmployeeEligibilityReportComponent },
            { path: 'empdemographics', component: EmployeeDemographicReportComponent },
            { path: 'empbreakinservice', component: EmployeeBreakInServiceReportComponent },
            { path: '', component: TopNavComponent, outlet: 'header' },
            { path: '', component: SideNavComponent, outlet: 'sidebar' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];