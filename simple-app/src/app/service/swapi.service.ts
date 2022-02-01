import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  swapiUrl = 'https://swapi.dev/api/';
  peopleUrl = this.swapiUrl + 'people';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<object[]> {
    return this.http.get<object[]>(this.peopleUrl);
  }
}
