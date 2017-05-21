"use strict";
var index_1 = require("./index");
exports.APPROUTES = [
    { path: 'enftreport', component: index_1.ENFTReportComponent },
    { path: 'ogreport', component: index_1.OnGoingReportComponent },
    { path: '', redirectTo: 'enftreport', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map