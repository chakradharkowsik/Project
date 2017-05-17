"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ENFTReportService = (function () {
    function ENFTReportService() {
    }
    ENFTReportService.prototype.getYears = function () { return ['2016', '2017', '2018']; };
    ENFTReportService.prototype.getMonths = function () { return ['January', 'Feburary', 'March']; };
    ENFTReportService.prototype.getControlGroups = function () { return ['Revolution', 'Cast & Crew']; };
    ENFTReportService.prototype.getTypeOfHours = function () { return ['Union', 'Non Union']; };
    ENFTReportService.prototype.getNonFullTimeCategories = function () { return ['Parttime', 'seasonal', 'uncategory', 'variable']; };
    ENFTReportService.prototype.getWeeklyCounts = function () { return { count13Weeks: "3", count26Weeks: "4", count47Weeks: "5", count52Weeks: "6" }; };
    ENFTReportService.prototype.getWeekReportData = function (weekCount) {
        switch (weekCount) {
            case 13:
                break;
            case 26:
                break;
            case 47:
                break;
            case 52:
                break;
        }
    };
    return ENFTReportService;
}());
ENFTReportService = __decorate([
    core_1.Injectable()
], ENFTReportService);
exports.ENFTReportService = ENFTReportService;
//# sourceMappingURL=enftreport.service.js.map