import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidenav',
    templateUrl: 'sidenav.html',

})
export class SideNavComponent {
    route: string = 'aca';
    dashboard:string='dashboard';
    nftreport: string = 'nhftreport';
    enftreport: string = 'enftreport';
    ogreport: string = 'ogreport';
}