"use strict";
var index_1 = require("./index");
exports.APPROUTES = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'reporting', component: index_1.AppComponent },
    {
        path: 'reporting', children: [
            { path: 'dashboard', component: index_1.DashboardComponent },
            { path: 'enftreport', component: index_1.ENFTReportComponent },
            { path: 'ogreport', component: index_1.OnGoingReportComponent },
            { path: 'nhftreport', component: index_1.NewHireFullTimeComponent },
            { path: 'pdareport', component: index_1.PayrollDataActivityReportComponent },
            { path: 'ercreport', component: index_1.ErCoverageReportComponent },
            { path: 'empeligilbility', component: index_1.EmployeeEligibilityReportComponent },
            { path: 'empdemographics', component: index_1.EmployeeDemographicReportComponent },
            { path: 'empbreakinservice', component: index_1.EmployeeBreakInServiceReportComponent },
            { path: '', component: index_1.TopNavComponent, outlet: 'header' },
            { path: '', component: index_1.SideNavComponent, outlet: 'sidebar' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map