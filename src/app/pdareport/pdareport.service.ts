import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IWorkDetails } from './workdetail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PayrollDataActivityReportService {
    private _pdaGoingReportUrl = 'app/api/';
    constructor(private _http: Http) {

    }
    
    getMeasurementEndDates() { return ['26-10-2016', '29-10-2017'] }

    getControlGroups() { return ['Revolution', 'Cast & Crew'] }

    getTypeOfHours() { return ['Union', 'Non Union'] }
   

    getWeeklyCounts(): any { return { count13Weeks: "3", count26Weeks: "4", count47Weeks: "5", count52Weeks: "6" }; }

    getWeekReportData(weekCount: number): Observable<IWorkDetails[]> {
        let fileName: string = '';
        switch (weekCount) {
            case 13:
                fileName = "pdareport13.json";
                break;
            case 26:
                fileName = "pdareport26.json";
                break;
            case 47:
                break;
            case 52:
                break;
        }
        return this._http.get(this._pdaGoingReportUrl + fileName)
            .map((response: Response) => <IWorkDetails[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}