import { Component, Input, OnInit } from '@angular/core';
import { Creador } from '../creador';

@Component({
  selector: 'app-creador-detail',
  templateUrl: './creador-detail.component.html',
  styleUrls: ['./creador-detail.component.css']
})
export class CreadorDetailComponent implements OnInit {

  @Input() creadorDetail! : Creador;

  constructor() { }

  ngOnInit() {
  }

}