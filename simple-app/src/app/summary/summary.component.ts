import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';
import { SwapiService } from '../service/swapi.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  people$!: Observable<any>;
  form: FormGroup;

  constructor(
    private swapiService: SwapiService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({ 
      name: ['', Validators.required],
      height: ['', Validators.required],
      mass: ['', Validators.required],
      hair_color: ['', Validators.required],
      eye_color: ['', Validators.required],
      birth_year: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.people$ = this.swapiService.getPeople().pipe(map((x) => x.results));
  }

  onRowClick(person: any, stepper: MatStepper): void {
    this.form.setValue({ 
      name: person.name,
      height: person.height,
      mass: person.mass,
      hair_color: person.hair_color,
      eye_color: person.eye_color,
      birth_year: person.birth_year,
      gender: person.gender
    });

    stepper.next();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
