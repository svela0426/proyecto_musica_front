import { Component, Input, OnInit } from '@angular/core';
import { TemaDetail } from '../tema-detail';
import { Tema } from '../tema';

@Component({
  selector: 'app-tema-detail',
  templateUrl: './tema-detail.component.html',
  styleUrls: ['./tema-detail.component.css']
})
export class TemaDetailComponent implements OnInit {

  @Input() temaDetail! : TemaDetail;

  constructor() { }

  ngOnInit() {
  }

}
