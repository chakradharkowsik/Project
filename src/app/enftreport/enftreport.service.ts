import {Injectable} from '@angular/core';

@Injectable()
export class ENFTReportService
{
     getYears(){return ['2016','2017','2018']}

     getMonths(){return ['January','Feburary','March']}

     getControlGroups(){return ['Revolution','Cast & Crew']}

     getTypeOfHours(){return ['Union','Non Union']}

     getNonFullTimeCategories(){return ['Parttime','seasonal','uncategory','variable']}

     getWeeklyCounts():any{return {count13Weeks:"3",count26Weeks:"4",count47Weeks:"5",count52Weeks:"6"};}

     getWeekReportData(weekCount:number):any{
         
        switch(weekCount){
            case 13:
            break;
            case 26:
            break;
            case 47:
            break;
            case 52:
            break;            
        }
     }

    
}