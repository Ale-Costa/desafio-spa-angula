import { Component, OnInit } from '@angular/core';
import { Calendario } from '../model/calendario';

@Component({
  selector: 'spa-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaCalendario: Calendario[] = [
    {pista: 'Silverstone', localizacao: 'Inglaterra', data: '03/07/22'},
    {pista: 'RedBull Ring', localizacao: 'Austria', data: '10/07/22'},
    {pista: 'Paul Ricard', localizacao: 'França', data: '24/07/22'},
    {pista: 'Hungaroring', localizacao: 'Hungria', data: '31/07/22'},
    {pista: 'Spa', localizacao: 'Belgica', data: '28/08/22'},
    {pista: 'Zanvoort', localizacao: 'Holanda', data: '04/09/22'},
    {pista: 'Monza', localizacao: 'Italia', data: '11/09/22'},
    {pista: 'Marina Bay', localizacao: 'Singapura', data: '02/10/22'}
  ]

}
