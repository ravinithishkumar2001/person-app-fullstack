import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:3000/people';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePerson(id: number, person: any): Observable<any> {
    // Simulated update (no effect on fake API)
    return this.http.put(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: number): Observable<any> {
    // Simulated delete (no effect on fake API)
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
