import { Component, OnInit } from '@angular/core';
import { CreadorService } from '../creador.service';
import { Creador } from '../creador';


@Component({
  selector: 'app-creador-list',
  templateUrl: './creador-list.component.html',
  styleUrls: ['./creador-list.component.css'],
})
export class CreadorListComponent implements OnInit {
  creadores: Array<Creador> = [];

  constructor(
    private creadorService: CreadorService) {}

  getCreadores(): void {
    console.log('entra getCreadores');
    this.creadorService.getCreadores().subscribe((creadores) => {
      this.creadores = creadores;
    });

  }

  ngOnInit() {
    this.getCreadores();
    console.log(this.getCreadores);
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
