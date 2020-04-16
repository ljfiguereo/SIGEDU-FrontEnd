import { Component } from '@angular/core';
import { SettingsService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sigedu-FrontEnd';

  constructor(public _ajustes: SettingsService) {
    _ajustes.obtenerAjustes();
  }
}
