import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './../../components/header/header.component';
import { FooterComponent } from './../../components/footer/footer.component';



@Component({
  selector: 'mymodels',
  templateUrl: './mymodels.component.html',
  styleUrls: ['./mymodels.component.scss']
})
export class MymodelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
