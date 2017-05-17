"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var sidenav_component_1 = require("./layout/sidenav.component");
var topnav_component_1 = require("./layout/topnav.component");
var enftreport_component_1 = require("./enftreport/enftreport.component");
var enftreport_service_1 = require("./enftreport/enftreport.service");
var ng2_table_1 = require("ng2-table/ng2-table");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_table_1.Ng2TableModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            ng2_bootstrap_1.TabsModule.forRoot()
        ],
        declarations: [app_component_1.AppComponent,
            sidenav_component_1.SideNavComponent,
            topnav_component_1.TopNavComponent,
            enftreport_component_1.ENFTReportComponent],
        providers: [
            enftreport_service_1.ENFTReportService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map