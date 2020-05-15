import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(mensaje => console.log('Termino', mensaje))
      .catch(() => console.error('Error en la promesa')
      );
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let contador = 0;

      let interval = setInterval(() => {

        console.log(contador);

        contador += 1;

        if (contador === 3) {
          resolve(true);
          // reject('Error no identificado');
          clearInterval(interval);
        }
      }, 1000
      );
    });
  }
}
