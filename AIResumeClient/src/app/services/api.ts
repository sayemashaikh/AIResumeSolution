import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {   // ⚠ MUST be ApiService

  private apiUrl = 'https://localhost:7185/weatherforecast';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}