import { Injectable } from '@angular/core';

declare let ExcellentExport: any;

@Injectable()
export class ExportToExcelService {

        excel(anchor: any, table: any, name: any): any {
                ExcellentExport.excel(anchor, table, name);
        }
        excelByTableElement(anchor: any, table: any, name: any): any {
              var link= ExcellentExport.excelByTableElement(anchor, table, name);
        }

        csvByTableElement(anchor: any, table: any, name: any): any {
                var link= ExcellentExport.csvByTableElement(anchor, table, name);
        }
}