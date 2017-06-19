import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmpEligibleWorkDetail } from './empeligibleworkdetail';
import { Observable } from 'rxjs/Observable';
// import { CONFIGURATION } from '../app.config';


@Injectable()
export class EmployeeEligibilityReportService {
    private _empEligibleReportUrl = 'app/api/';
    constructor(private _http: Http) { }


    getEmployeeEligibleReports(): Observable<IEmpEligibleWorkDetail[]> {
        let fileName = 'empeligibility.json';
        return this._http.get(this._empEligibleReportUrl + fileName)
            .map((response: Response) => <IEmpEligibleWorkDetail[]>response.json())
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