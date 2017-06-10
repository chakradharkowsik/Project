import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  moduleId:module.id,
  templateUrl: './login.html',
})
export class LoginComponent  implements AppComponent{ 
  isNaviationEnabled:boolean=false;
 }
