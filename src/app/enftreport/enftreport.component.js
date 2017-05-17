"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var enftreport_service_1 = require("./enftreport.service");
var ENFTReportComponent = (function () {
    function ENFTReportComponent(_enftreport) {
        this._enftreport = _enftreport;
        this.workDetails = [];
        this.rows = [];
        this.columns = [
            { title: 'Work Year', className: 'va-m blueHeader', name: 'WorkYear' },
            { title: 'Work Month', className: 'va-m', name: 'workMonth' },
            { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
            { title: 'Most Recent Production Company', className: 'va-m', name: 'mostRecentProductionCompany' },
            { title: 'Most Recent Project', className: 'va-m', name: 'mostRecentProject' },
            { title: 'SSN Number', className: 'hidden-xs va-m', name: 'ssnNumber' },
            { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
            { title: 'Last Name', className: 'va-m', name: 'lastName' },
            { title: 'Last Worked Date', className: 'va-m', name: 'lastWorkedDate' },
            { title: 'Hire Date', className: 'va-m', name: 'hireDate' },
            { title: 'Payroll Source', className: 'va-m', name: 'payrollSource' },
            { title: 'Average Hours', className: 'va-m', name: 'avgHours' },
            { title: 'Total Hours', className: 'va-m', name: 'totalHours' },
            { title: 'All Control Group', className: 'va-m', name: 'allControlGroup' },
            { title: 'Union Type', className: 'va-m', name: 'unionType' },
            { title: 'All Union Type', className: 'va-m', name: 'allUnionType' },
            { title: 'Employee Type', className: 'va-m', name: 'employeeType' },
            { title: 'Label Summary 13 Weeks', className: 'va-m', name: 'lastSummary13Weeks' },
            { title: 'Summary 13 Weeks', className: 'va-m', name: 'summary13Weeks' },
            { title: 'Label Summary 26 Weeks', className: 'va-m', name: 'lastSummary26Weeks' },
            { title: 'Summary 26 Weeks', className: 'va-m', name: 'summary26Weeks' },
            { title: 'Label Summary 47 Weeks', className: 'va-m', name: 'lastSummary47Weeks' },
            { title: 'Summary 47 Weeks', className: 'va-m', name: 'summary47Weeks' },
            { title: 'Label Summary 52 Weeks', className: 'va-m', name: 'lastSummary52Weeks' },
            { title: 'Summary 52 Weeks', className: 'va-m', name: 'summary52Weeks' },
            { title: 'Avg. Weekly Threshold', className: 'va-m', name: 'avgWeeklyThreshold' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    ENFTReportComponent.prototype.ngOnInit = function () {
        // throw new Error("Method not implemented.");
        this.Years = this._enftreport.getYears();
        this.Months = this._enftreport.getMonths();
        this.ControlGroups = this._enftreport.getControlGroups();
        this.TypeOfHours = this._enftreport.getTypeOfHours();
        this.NonFullTimeCatgeories = this._enftreport.getNonFullTimeCategories();
        this.AvgWeeklyHrsThr = "30";
        this.count13Weeks = "0";
        this.count26Weeks = "0";
        this.count47Weeks = "0";
        this.count52Weeks = "0";
        this.onChangeTable(this.config);
    };
    ENFTReportComponent.prototype.Search = function () {
        var counts = this._enftreport.getWeeklyCounts();
        this.count13Weeks = counts.count13Weeks;
        this.count26Weeks = counts.count26Weeks;
        this.count47Weeks = counts.count47Weeks;
        this.count52Weeks = counts.count52Weeks;
    };
    ENFTReportComponent.prototype.GetWeekData = function (weekCount) {
        this._enftreport.getWeekReportData(weekCount);
    };
    ENFTReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    ENFTReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.workDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    ENFTReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    ENFTReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    ENFTReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.workDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return ENFTReportComponent;
}());
ENFTReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'enftreport',
        templateUrl: 'enftreport.html'
    }),
    __metadata("design:paramtypes", [enftreport_service_1.ENFTReportService])
], ENFTReportComponent);
exports.ENFTReportComponent = ENFTReportComponent;
//# sourceMappingURL=enftreport.component.js.map