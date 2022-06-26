import { Component, OnInit } from '@angular/core';
import { Construtores } from '../model/construtores';

@Component({
  selector: 'spa-construtores',
  templateUrl: './construtores.component.html',
  styleUrls: ['./construtores.component.css']
})
export class ConstrutoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaConstrutores: Construtores[] = [
    {posicao: 1, equipe: 'RedBull', motor: 'RBPT', pontos: 295},
    {posicao: 2, equipe: 'Ferrari', motor: 'Ferrari', pontos: 395},
    {posicao: 3, equipe: 'Mercedes', motor: 'Mercedes', pontos: 295},
    {posicao: 4, equipe: 'McLaren', motor: 'Mercedes', pontos: 295},
    {posicao: 5, equipe: 'Alpine', motor: 'Renault', pontos: 295},
    {posicao: 6, equipe: 'Alfa Romeo', motor: 'Ferrari', pontos: 295},
    {posicao: 7, equipe: 'Alpha Tauri', motor: 'RBPT', pontos: 295},
    {posicao: 8, equipe: 'Aston Martin', motor: 'Mercedes', pontos: 295},
    {posicao: 9, equipe: 'Haas', motor: 'Ferrari', pontos: 295},
    {posicao: 10, equipe: 'Willians', motor: 'Mercedes', pontos: 295},
  ]


}

