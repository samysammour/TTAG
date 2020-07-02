import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtSectionRoutingModule } from './art-section-routing.module';
import { ArtSectionComponent } from './art-section.component';
import { ArtCreatorComponent } from './creation/art-creator/art-creator.component';

import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [
    ArtSectionComponent,
    ArtCreatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtSectionRoutingModule,
    MaterialModule ,
    FormsModule,
    ReactiveFormsModule
  ],

   entryComponents:[ArtCreatorComponent]
})
export class ArtSectionModule { }
