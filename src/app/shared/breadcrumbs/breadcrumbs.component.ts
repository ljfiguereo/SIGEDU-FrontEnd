import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(private route: Router,
    private title: Title,
    private meta: Meta) {

    this.getDataRoute()
      .subscribe(data => {
        this.titulo = data.titulo;
        title.setTitle(this.titulo);

        const metaDefinition: MetaDefinition = {
          name: 'description',
          content: this.titulo
        };

        this.meta.updateTag(metaDefinition);
      });
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.route.events
      .pipe(
        // filter((valor, index) => {
        //   if (valor.snapshot === undefined || valor.snapshot.data.titulo === undefined) {
        //     return false;
        //   }
        //   return true;
        // })
        filter((evento) => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.data.titulo != null),
        map((evento: ActivationEnd) => evento.snapshot.data)
      );
  }

}
