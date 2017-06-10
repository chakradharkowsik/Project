import { Component, OnInit } from '@angular/core';
import { ErCoverageReportService } from './erCoverageReport.service';
import { ExportToExcelService } from '../shared/export.service';
@Component({
    moduleId: module.id,
    templateUrl: 'erCoverageReport.html'
})

export class ErCoverageReportComponent implements OnInit {

    constructor(private _erCoverageReportService: ErCoverageReportService,private _export:ExportToExcelService) { }

    selectedYear: string;
    selectedHireMonth: string;
    selectedControlGroup: string;
    annulaizedMonthly: string = "0";
    errorMessage: string;

    Years: Array<string>;
    Months: Array<string>;
    ControlGroups: Array<string>;
    workerDetails: Array<any> = [];

    dataLoaded: boolean;
    public rows: Array<any> = [];
    public page: number = 1;
    public itemsPerPage: number = 2;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public columns: Array<any> = [
        { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
        { title: 'Year Month', className: 'va-m', name: 'yearMonth' },
        { title: 'Worker pool FTE Status', className: 'va-m', name: 'workerPoolFteStatus' },       
        { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
        { title: 'Last Name', className: 'va-m', name: 'lastName' },
        { title: 'Worked Hours', className: 'va-m', name: 'workedHours' },
        { title: 'Worker Pool FTE Count', className: 'va-m', name: 'workerPoolFteCount' },  
    ];


    ngOnInit(): void {
        this.Years = this._erCoverageReportService.getYears();        
        this.ControlGroups = this._erCoverageReportService.getControlGroups();

        this.selectedYear = "-1";
        this.selectedHireMonth = "-1";
        this.selectedControlGroup = "-1";
        this.annulaizedMonthly = "0"

        this.onChangeTable(this.config);
        this.dataLoaded = false;

    }

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table', 'table-striped', 'table-bordered', 'table-hover']
    };

    annualizedMonthlyReportData(): void {
        this._erCoverageReportService.getAnnulaizedMonthlyWorkersReportData().subscribe(workdetails => {
            this.workerDetails = workdetails;
            this.onChangeTable(this.config);
            this.dataLoaded = true;
        },
            error => this.errorMessage = <any>error);

    }

    Search(): void {
        let counts = this._erCoverageReportService.getAnnulaizedMonthlyWorkers();
        this.annulaizedMonthly = counts.annulaizedMonthly;

    }


    downloadPdf(): void {

    }

    downloadExcel(): void {
        debugger;
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0)
            this._export.excelByTableElement(btn, tbl.children[0], 'ER Coverage Report');
    }
    public onCellClick(data: any): any {
        console.log(data);
    }

    public changePage(page: any, data: Array<any> = this.workerDetails): Array<any> {
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

        let filteredData = this.changeFilter(this.workerDetails, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }
}