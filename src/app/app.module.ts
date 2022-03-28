import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SickListComponent } from './Patients/sick-list/sick-list.component';
import { RecoveredListComponent } from './Patients/recovered-list/recovered-list.component';
import { AttentionListComponent } from './Patients/attention-list/attention-list.component';
import { PatientsComponent } from './Patients/patients/patients.component';
import { SurgeryComponent } from './surgery/surgery/surgery.component';

@NgModule({
  declarations: [
    AppComponent,
    SickListComponent,
    RecoveredListComponent,
    AttentionListComponent,
    PatientsComponent,
    SurgeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
