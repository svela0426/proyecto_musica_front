import { Component, OnInit } from '@angular/core';
import { CacionDetail } from '../cacion-detail';

import { CacionService } from '../cacion.service';


@Component({
  selector: 'app-cacion-list',
  templateUrl: './cacion-list.component.html',
  styleUrls: ['./cacion-list.component.css']
})
export class CacionListComponent implements OnInit {


  cacions: Array<CacionDetail> = [];
  selectedCacion!: CacionDetail;
  selected: Boolean = false;


  constructor(private cancionService: CacionService) { }

  getCanciones(): void {
    this.cancionService.getCanciones().subscribe((cacions) => {
      this.cacions = cacions;
    });
  }
  onSelected(cacion: CacionDetail): void {
    this.selected = true;
    this.selectedCacion = cacion;
  }

  ngOnInit() {
    this.getCanciones();
    console.log(this.cacions);


  }

  filtro() {

    var  divp, imgp, i, txtValue;

    var filter = (<HTMLInputElement>document.getElementById('myInput')).value.toUpperCase();

    divp = <HTMLElement>document.getElementById("cont");
    imgp = divp!.getElementsByClassName("col mb-2");

    for (i = 0; i < imgp.length; i++) {
      txtValue = imgp[i].id;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        (<HTMLElement>imgp[i]).style.display = "";
      } else {
        (<HTMLElement>imgp[i]).style.display = "none";
      }
    }
  }


 }
