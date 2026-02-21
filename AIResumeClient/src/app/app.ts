import { Component } from '@angular/core';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  weatherData: any;

  constructor(private apiService: ApiService) {
    this.loadData();
  }

  loadData() {
    this.apiService.getWeather().subscribe(data => {
      this.weatherData = data;
      console.log(data);
    });
  }
}