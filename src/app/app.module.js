"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("./rxjs-extension");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var ng2_table_1 = require("ng2-table/ng2-table");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_routes_1 = require("./app.routes");
var index_1 = require("./shared/index");
var index_2 = require("./index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.APPROUTES, { useHash: true }),
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            ng2_bootstrap_1.TabsModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.DashboardComponent,
            index_2.SideNavComponent,
            index_2.TopNavComponent,
            index_2.ENFTReportComponent,
            index_2.OnGoingReportComponent,
            index_2.NewHireFullTimeComponent,
            index_2.PayrollDataActivityReportComponent,
            index_2.AddCustomerComponent,
            index_2.ListCustomerComponent,
            index_2.OnboardingCustomerInformationComponent,
            index_2.ClientPayrollComponent,
            index_2.OnboardingPersonalInformationComponent,
            index_2.AleDataUploadComponent,
            index_2.ControlGroupComponent,
            index_2.ApplicableLargeEmployeeComponent,
            index_2.ErCoverageReportComponent,
            index_2.EmployeeEligibilityReportComponent,
            index_2.EmployeeDemographicReportComponent,
            index_2.EmployeeBreakInServiceReportComponent,
            index_2.EmployeeSummaryReportComponent,
            index_2.InsuranceDataUploadComponent,
            index_2.OneZeroNineFourDataUploadComponent,
            index_2.OneZeroNineFiveDataUploadComponent,
            index_2.PayrollDataUploadComponent,
            index_2.LoginComponent
        ],
        providers: [
            index_2.ENFTReportService,
            index_2.OnGoingReportService,
            index_1.ExportToExcelService,
            index_2.NewHireFullTimeService,
            index_2.ErCoverageReportService,
            index_2.EmployeeEligibilityReportService,
            index_2.EmployeeDemographicReportService,
            index_2.EmployeeBreakInServiceReportService,
            index_2.PayrollDataActivityReportService,
            index_2.EmployeeSummaryReportService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map