import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Environment
import { environment } from '../environments/environment';
import { API_BASE_URL } from './_core/services/service.generated';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.baseApiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
