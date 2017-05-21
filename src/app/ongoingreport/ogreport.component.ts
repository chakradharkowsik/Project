import { Component, OnInit } from '@angular/core';
import { OnGoingReportService } from './ogreport.service';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

@Component({
    moduleId: module.id,
    templateUrl: './ogreport.html'

})
export class OnGoingReportComponent implements OnInit {

    dataLoaded:boolean;    
    selectedMeasurementEndDates: string;
    selectedControlGroup: string;
    selectedTypeOfHours: string;
    selectedNonFullTimeCatgeories: Array<string>;
    AvgWeeklyHrsThr: string;

    
    measurementEndDates: Array<string>;
    ControlGroups: Array<string>;
    TypeOfHours: Array<string>;
    NonFullTimeCatgeories: Array<string>;
    errorMessage:string;
    count13Weeks: string;
    count26Weeks: string;
    count47Weeks: string;
    count52Weeks: string;

    workDetails: Array<any> = [];

    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
        { title: 'Latest Production Company', className: 'va-m', name: 'mostRecentProductionCompany' },
        { title: 'Most Recent Show', className: 'va-m', name: 'mostRecentProject' },
        { title: 'SSN Number', className: 'hidden-xs va-m', name: 'ssnNumber' },
        { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
        { title: 'Last Name', className: 'va-m', name: 'lastName' },
        { title: 'Last Worked Date', className: 'va-m', name: 'lastWorkedDate' },
        { title: 'Hire Date', className: 'va-m', name: 'hireDate' },
        { title: 'Union/Non-Union', className: 'va-m', name: 'unionType' },
        { title: 'Weeks Since Last Worked', className: 'va-m', name: 'weeksSinceLastWorked' },
        { title: 'Average Hours-SMP', className: 'va-m', name: 'avgHours' },
        { title: 'Total Hours', className: 'va-m', name: 'totalHours' }
    ];
    public page: number = 1;
    public itemsPerPage: number = 1;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table', 'table-striped', 'table-bordered', 'table-hover']
    };

    constructor(private _ogreportsrv: OnGoingReportService) {

    }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
       
        this.measurementEndDates = this._ogreportsrv.getMeasurementEndDates();
        this.ControlGroups = this._ogreportsrv.getControlGroups();
        this.TypeOfHours = this._ogreportsrv.getTypeOfHours();
        this.NonFullTimeCatgeories = this._ogreportsrv.getNonFullTimeCategories();
        this.AvgWeeklyHrsThr = "30";

       
        this.selectedMeasurementEndDates="-1";
        this.selectedControlGroup="-1";
        this.selectedTypeOfHours="-1";

        this.count13Weeks = "0";
        this.count26Weeks = "0";
        this.count47Weeks = "0";
        this.count52Weeks = "0";

        this.onChangeTable(this.config);
        this.dataLoaded=false;
    }

    Search(): void {
        let counts = this._ogreportsrv.getWeeklyCounts();
        this.count13Weeks = counts.count13Weeks;
        this.count26Weeks = counts.count26Weeks;
        this.count47Weeks = counts.count47Weeks;
        this.count52Weeks = counts.count52Weeks;        
    }

    getWeekData(weekCount: number): void {
        // debugger;
          this._ogreportsrv.getWeekReportData(weekCount).subscribe(workdetails => {
                this.workDetails = workdetails;
                this.onChangeTable(this.config);
                this.dataLoaded=true;
            },
            error => this.errorMessage = <any>error);
        //this._ogreportsrv.getWeekReportData(weekCount);

    }
    public onCellClick(data: any): any {
        console.log(data);
    }
    
    public changePage(page: any, data: Array<any> = this.workDetails): Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }


    public changeFilter(data: any, config: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });

        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) =>
                item[config.filtering.columnName].match(this.config.filtering.filterString));
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            this.columns.forEach((column: any) => {
                if (item[column.name].toString().match(this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;

        return filteredData;
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }
    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.workDetails, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }
}