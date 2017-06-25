import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmployeeDemographicDetail } from './employeeDemographicDetail';
import { Observable } from 'rxjs/Observable';
import { CONFIGURATION } from '../app.config';

@Injectable()
export class EmployeeDemographicReportService {
    private _empDemographicsReportUrl = CONFIGURATION.baseServiceUrl + 'demographicsreportservice/';
    constructor(private _http: Http) { }

    getEmployeeDemographicsReports(): Observable<IEmployeeDemographicDetail[]> {
        let fileName = 'getDemographicsReportData';
        return this._http.get(this._empDemographicsReportUrl + fileName)
            .map((response: Response) => <IEmployeeDemographicDetail[]>response.json())
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
