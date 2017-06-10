import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {
  SideNavComponent, TopNavComponent, ENFTReportComponent, ENFTReportService, OnGoingReportComponent,
  PayrollDataActivityReportComponent,PayrollDataActivityReportService,
  ErCoverageReportComponent,ErCoverageReportService,
  EmployeeEligibilityReportComponent,EmployeeEligibilityReportService,
  EmployeeDemographicReportComponent,EmployeeDemographicReportService,
  EmployeeBreakInServiceReportComponent,EmployeeBreakInServiceReportService,
  OnGoingReportService, NewHireFullTimeComponent, NewHireFullTimeService, DashboardComponent, LoginComponent
} from './index';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule, TabsModule } from 'ng2-bootstrap';
import { APPROUTES } from './app.routes';
import { ExportToExcelService } from './shared/index';
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTES),
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    TopNavComponent,
    ENFTReportComponent,
    OnGoingReportComponent,
    NewHireFullTimeComponent,
    PayrollDataActivityReportComponent,
     ErCoverageReportComponent,
    EmployeeEligibilityReportComponent,
    EmployeeDemographicReportComponent,
    EmployeeBreakInServiceReportComponent,
    LoginComponent
  ],
  providers: [
    ENFTReportService,
    OnGoingReportService,
    ExportToExcelService,
    NewHireFullTimeService,
    ErCoverageReportService,
    EmployeeEligibilityReportService,
    EmployeeDemographicReportService,
    EmployeeBreakInServiceReportService,
    PayrollDataActivityReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
