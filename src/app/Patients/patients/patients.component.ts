import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patient, PatientService } from 'src/app/services/patient.service';

import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  title = 'Registro De Pacientes';

  form: FormGroup;

  faAddressCard = faAddressCard;
  faUser = faUser;




  constructor(private formBuilder: FormBuilder, private patientService: PatientService) {
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      fullName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      idTriage: ['', [Validators.required]],
      symptom: ['', [Validators.required]],
      checkIn: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  registerPatient(){
    const patient: Patient = {
      id: this.form.get('id')?.value,
      fullName: this.form.get('fullName')?.value,
      age: this.form.get('age')?.value,
      gender: this.form.get('gender')?.value,
      idTriage: this.form.get('idTriage')?.value,
      symptom: this.form.get('symptom')?.value,
      checkIn: this.form.get('checkIn')?.value
    }

    this.patientService.registerPatient(patient).subscribe(data => {
      console.log('Guardado exitosamente');
      this.form.reset();
    })
  }

}
