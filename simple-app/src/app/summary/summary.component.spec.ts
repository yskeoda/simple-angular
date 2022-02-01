import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { SwapiService } from '../service/swapi.service';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let getPeopleSpy: jasmine.Spy;
  let testPeople: any;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    testPeople = { results: [] };

    const swapiService = jasmine.createSpyObj('SwapiService', ['getPeople']);
    getPeopleSpy = swapiService.getPeople.and.returnValue(of(testPeople));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SummaryComponent,
        FormBuilder,
        { provide: SwapiService, useValue: swapiService },
      ],
    });

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPeople once', () => {
    expect(getPeopleSpy.calls.count())
      .withContext('getPeople called once')
      .toBe(1);
  });
});
