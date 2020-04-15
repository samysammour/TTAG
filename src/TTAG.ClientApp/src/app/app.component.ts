import { Component, InjectionToken, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastClient, WeatherForecast } from './_core/services/service.generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'TTAG';
  public baseUrl: string;
  public weatherForecasts: WeatherForecast[];

  constructor(private weatherForecastClient: WeatherForecastClient) {
  }

  ngOnInit(): void {
    this.weatherForecastClient.get().subscribe((result: WeatherForecast[]) => {
      this.weatherForecasts = result;
    });
  }
}
