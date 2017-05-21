import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SideNavComponent, TopNavComponent, ENFTReportComponent, ENFTReportService, OnGoingReportComponent, OnGoingReportService } from './index';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule, TabsModule } from 'ng2-bootstrap';
import { APPROUTES } from './app.routes';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTES),
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [AppComponent,
    SideNavComponent,
    TopNavComponent,
    ENFTReportComponent,
    OnGoingReportComponent],
  providers: [
    ENFTReportService,
    OnGoingReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
