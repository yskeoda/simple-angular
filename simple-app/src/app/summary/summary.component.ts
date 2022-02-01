import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { SwapiService } from '../service/swapi.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  people$ = this.swapiService.getPeople().pipe(map((x) => x.results));

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {}

  onRowClick(person: any): void {}
}
