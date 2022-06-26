import { Component, OnInit } from '@angular/core';
import { Pilotos } from '../model/pilotos';

@Component({
  selector: 'spa-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
export class PilotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaPilotos: Pilotos[] = [
    {posicao: 1, nome: 'Max Verstappen', equipe: 'RedBull', pontos: 175},
    {posicao: 2, nome: 'Sergio Perez', equipe: 'RedBull', pontos: 129},
    {posicao: 3, nome: 'Charles Leclerc', equipe: 'Ferrari', pontos: 126},
    {posicao: 4, nome: 'George Russel', equipe: 'Mercedes', pontos: 111},
    {posicao: 5, nome: 'Carlos Sainz', equipe: 'Ferrari', pontos: 102},
    {posicao: 6, nome: 'Lewis Hamilton', equipe: 'Mercedes', pontos: 77},
    {posicao: 7, nome: 'Lando Norris', equipe: 'Mclaren', pontos: 50},
    {posicao: 9, nome: 'Valtteri Bottas', equipe: 'Alfa Romeo', pontos: 46},
    {posicao: 8, nome: 'Esteban Ocon', equipe: 'Alpine', pontos: 39},
    {posicao: 10, nome: 'Fernando Alonso', equipe: 'Alpine', pontos: 18},
    {posicao: 11, nome: 'Pierre Gasly', equipe: 'Alpha Tauri', pontos: 16},
    {posicao: 12, nome: 'Kevin Magnussen', equipe: 'Haas', pontos: 15},
    {posicao: 13, nome: 'Daniel Ricciardo', equipe: 'Mclaren', pontos: 15},
    {posicao: 14, nome: 'Sebastian Vettel', equipe: 'Aston Martin', pontos: 13},
    {posicao: 15, nome: 'Yuki Tsunoda', equipe: 'Alpha Tauri', pontos: 11},
    {posicao: 16, nome: 'Zhou Guanyu', equipe: 'Alfa Romeo', pontos: 5},
    {posicao: 17, nome: 'Alexander Albon', equipe: 'Willians', pontos: 3},
    {posicao: 18, nome: 'Lance Stroll', equipe: 'Aston Martin', pontos: 3},
    {posicao: 19, nome: 'Mick Schumacher', equipe: 'Haas', pontos: 0},
    {posicao: 20, nome: 'Nico Hülkenberg', equipe: 'Aston Martin', pontos: 0},
    {posicao: 21, nome: 'Nicholas Latifi', equipe: 'Willians', pontos: 0}
  ] 

}
