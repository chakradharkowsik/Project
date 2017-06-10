import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IErCoverageWorkDetail } from './erCoverageWorkDetail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ErCoverageReportService {

    private _erCoverageReportUrl = 'app/api/';
    
    constructor(private _http: Http) { }
    
    getYears() { return ['2016', '2017', '2018'] }

    getControlGroups() { return ['Revolution', 'Cast & Crew'] }

    getAnnulaizedMonthlyWorkers(): any { return { annulaizedMonthly: "26" }; }

    getAnnulaizedMonthlyWorkersReportData(): Observable<IErCoverageWorkDetail[]> {
        let fileName: string = 'ercreport26.json';        
        return this._http.get(this._erCoverageReportUrl + fileName)
            .map((response: Response) => <IErCoverageWorkDetail[]>response.json())
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