import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progresoAzul: number = 20;
  progresoVerde: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  // actualizarValor(event: number) {
  //   // console.log('Evento: ', event);
  //   this.progresoAzul = event;
  // }
}
