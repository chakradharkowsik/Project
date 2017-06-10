import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidenav',
    templateUrl: 'sidenav.html'
})
export class SideNavComponent {
    route: string = 'reporting';
    dashboard:string='dashboard';
    nftreport: string = 'nhftreport';
    enftreport: string = 'enftreport';
    ogreport: string = 'ogreport';
    pdareport:string='pdareport';
    ercreport:string='ercreport';
    empsummary:string='empsummary';
    empeligilbility:string='empeligilbility';
    empdemographics:string='empdemographics';
    empbreakinservice:string='empbreakinservice';
}