import { Component, Input, OnInit } from '@angular/core';
import { CacionDetail } from '../cacion-detail';

@Component({
  selector: 'app-cacion-detail',
  templateUrl: './cacion-detail.component.html',
  styleUrls: ['./cacion-detail.component.css']
})
export class CacionDetailComponent implements OnInit {

  @Input() caciondetail!: CacionDetail;


  constructor() { }

  ngOnInit(): void {
  }

}
