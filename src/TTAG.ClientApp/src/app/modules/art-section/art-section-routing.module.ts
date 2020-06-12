import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtSectionComponent } from './art-section.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
     RouterModule.forChild([
          {path: 'art' , component: ArtSectionComponent}
       ]),
  ],
  exports: [RouterModule]
})
export class ArtSectionRoutingModule {


 }
