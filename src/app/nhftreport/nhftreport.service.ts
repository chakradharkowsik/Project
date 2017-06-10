
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { InhftWorkDetail } from './nhftworkdetail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CONFIGURATION } from '../app.config';
@Injectable()
export class NewHireFullTimeService
{
   constructor(private _http:Http){}
   private _enftreportUrl = CONFIGURATION.baseServiceUrl;

    getYears() { return ['2016', '2017', '2018'] }

    getMonths() { return ['January', 'Feburary', 'March'] }

    getControlGroups() { return ['Revolution', 'Cast & Crew'] }

    getEligibleFullTimeWorkers(): any { return { eftworkers: "26" }; }

    getEligibleFullTimeReportData(): Observable<InhftWorkDetail[]> {
        let fileName: string = 'enftreport26.json';        
        return this._http.get(this._enftreportUrl + fileName)
            .map((response: Response) => <InhftWorkDetail[]>response.json())
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