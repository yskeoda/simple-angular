import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { map } from 'rxjs';
import { SwapiService } from '../service/swapi.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  people$ = this.swapiService.getPeople().pipe(map((x) => x.results));
  form: FormGroup;

  constructor(
    private swapiService: SwapiService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({ name: ['', Validators.required] });
  }

  ngOnInit(): void {}

  onRowClick(person: any, stepper: MatStepper): void {
    stepper.next();
  }
}
