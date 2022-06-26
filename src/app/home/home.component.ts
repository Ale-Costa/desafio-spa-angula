import { Component, OnInit } from '@angular/core';
import { Calendario } from '../model/calendario';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaCalendario: Calendario[] = [
    {pista: 'Silverstone', localizacao: 'Inglaterra', data: '03/07/22'},
    {pista: 'Silverstone', localizacao: 'Inglaterra', data: '03/07/22'}
  ]
}
