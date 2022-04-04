import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Patient {
  id: number;
  fullName: string;
  age: number;
  gender: string;
  idTriage: number;
  symptom: string;
  checkIn: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly API = environment.api;
  constructor(private http: HttpClient) {}

  getSickList():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.API + '/Patient');
  }

  registerPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.API + '/Patient', patient)
  }

}

