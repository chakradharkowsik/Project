import { Component } from '@angular/core';
import { CONFIGURATION } from '../app.config';

@Component({
    moduleId: module.id,
    selector: 'sidenav',
    templateUrl: 'sidenav.html'
})
export class SideNavComponent {
    route: string = CONFIGURATION.reportingroute;
    dashboard: string = CONFIGURATION.dashboard;
    nftreport: string = CONFIGURATION.nftreport;
    enftreport: string = CONFIGURATION.enftreport;
    ogreport: string = CONFIGURATION.ogreport;
    pdareport: string = CONFIGURATION.pdareport;
    ercreport: string = CONFIGURATION.ercreport;
    empsummary: string = CONFIGURATION.empsummary;
    empeligilbility: string = CONFIGURATION.empeligilbility;
    empdemographics: string = CONFIGURATION.empdemographics;
    empbreakinservice: string = CONFIGURATION.empbreakinservice;


}