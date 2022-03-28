import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SickListComponent } from './Patients/sick-list/sick-list.component';
import { RecoveredListComponent } from './Patients/recovered-list/recovered-list.component';
import { AttentionListComponent } from './Patients/attention-list/attention-list.component';
import { PatientsComponent } from './Patients/patients/patients.component';
import { SurgeryComponent } from './Surgery/surgery/surgery.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SickListComponent,
    RecoveredListComponent,
    AttentionListComponent,
    PatientsComponent,
    SurgeryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
