import { Component } from '@angular/core';
import { SwapiService } from './service/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-app';

  constructor(swapiService: SwapiService) {
    swapiService.getPeople().subscribe((data) => console.log(data));
  }
}
