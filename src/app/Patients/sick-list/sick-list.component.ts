import { Component, OnInit } from '@angular/core';
import { Patient, PatientService } from 'src/app/services/patient.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sick-list',
  templateUrl: './sick-list.component.html',
  styleUrls: ['./sick-list.component.scss']
})
export class SickListComponent implements OnInit {

  title = 'Lista De Enfermos'

  sicks: Patient[] = [];

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.service.getSickList()
    .subscribe(res => {
      this.sicks = [...res];
    });
  }

}
