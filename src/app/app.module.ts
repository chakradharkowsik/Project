import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SideNavComponent } from './layout/sidenav.component';
import { TopNavComponent } from './layout/topnav.component';
import { ENFTReportComponent } from './enftreport/enftreport.component';
import { ENFTReportService } from './enftreport/enftreport.service';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule, TabsModule } from 'ng2-bootstrap';

@NgModule({
  imports: [BrowserModule, CommonModule,
    FormsModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [AppComponent,
    SideNavComponent,
    TopNavComponent,
    ENFTReportComponent],
    providers:[
      ENFTReportService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
