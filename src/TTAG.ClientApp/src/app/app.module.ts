import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './_shared/shared.module';
import { CoreModule } from './_core/core.module';

// Environment
import { environment } from '../environments/environment';
import { API_BASE_URL, ArtCategory } from './_core/services/service.generated';

import { ToastrModule } from 'ngx-toastr';
import { ArtSectionModule } from './modules/art-section/art-section.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './modules/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    MainNavComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ArtSectionModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
    }),
    MatCardModule,
    MatListModule  ,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
 ],
 
  providers: [
    { provide: API_BASE_URL, useValue: environment.baseApiUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
