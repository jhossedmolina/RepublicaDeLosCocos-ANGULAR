import { Component, OnInit } from '@angular/core';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Republica De Los Cocos';
  faHospital = faHospital;
  constructor() { }

  ngOnInit(): void {
  }

}

