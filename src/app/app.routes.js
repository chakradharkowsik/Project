"use strict";
var index_1 = require("./index");
exports.APPROUTES = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'aca', component: index_1.AppComponent },
    {
        path: 'aca', children: [
            { path: 'dashboard', component: index_1.DashboardComponent },
            { path: 'enftreport', component: index_1.ENFTReportComponent },
            { path: 'ogreport', component: index_1.OnGoingReportComponent },
            { path: 'nhftreport', component: index_1.NewHireFullTimeComponent },
            { path: '', component: index_1.TopNavComponent, outlet: 'header' },
            { path: '', component: index_1.SideNavComponent, outlet: 'sidebar' }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map