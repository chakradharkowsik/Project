import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmployeeBreakInServiceDetail } from './employeeBreakInServiceDetail';
import { Observable } from 'rxjs/Observable';
import { CONFIGURATION } from '../app.config';

@Injectable()
export class EmployeeBreakInServiceReportService {

    private _empBreakInServiceReportUrl = CONFIGURATION.baseServiceUrl + 'breakinreportservice/';
    constructor(private _http: Http) { }

    getEmployeeDemographicsReports(): Observable<IEmployeeBreakInServiceDetail[]> {
        let fileName = 'getBreakInServiceReportData';
        return this._http.get(this._empBreakInServiceReportUrl + fileName)
            .map((response: Response) => <IEmployeeBreakInServiceDetail[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Failed in web api(Server error) ');
    }
}
