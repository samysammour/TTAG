import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './_shared/shared.module';
import { CoreModule } from './_core/core.module';

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
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.baseApiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
