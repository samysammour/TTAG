import { Component, InjectionToken, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'TTAG';
  public baseUrl: string;
  public temperatureC: number[];

  constructor(private http: HttpClient, @Inject(API_BASE_URL) baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : '';
  }

  ngOnInit(): void {
    this.http.get(this.baseUrl + '/WeatherForecast').subscribe((result: any[]) => {
      this.temperatureC = result.map(x => x.temperatureC);
    });
  }
}
