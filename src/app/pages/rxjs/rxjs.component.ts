import { Component, OnInit, OnDestroy } from '@angular/core';
import { retry, map, filter, subscribeOn } from 'rxjs/operators';
import { Observable, Subscriber, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  Subsctipcion: Subscription;

  constructor() {

    this.Subsctipcion = this.regresaObs()
      //.pipe(retry(3))
      .subscribe(
        numero => { console.log('Subs ', numero); },
        error => console.error('Error en el Obs', error),
        () => console.log('El Obs Termino')
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('Pagina dejada');
    this.Subsctipcion.unsubscribe();

  }

  regresaObs(): Observable<any> {
    return new Observable((observable: Subscriber<any>) => {

      let contador = 0;
      let interval = setInterval(() => {

        contador++;

        const salida = {
          valor: contador
        };

        observable.next(salida);

        // if (contador === 3) {
        //   clearInterval(interval);
        //   observable.complete();
        // }

        // if (contador === 2) {
        //   //clearInterval(interval);
        //   observable.error('Upps');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('Filter', valor, index);
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
