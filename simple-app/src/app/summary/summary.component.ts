import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { SwapiService } from '../service/swapi.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  people$ = this.swapiService.getPeople().pipe(map(x => x.results));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {}

  onRowClick(person: any): void {    
  }
}
