import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtSectionRoutingModule } from './art-section-routing.module';
import { ArtSectionComponent } from './art-section.component';
import { ArtCreatorComponent } from './creation/art-creator/art-creator.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    ArtSectionComponent,
    ArtCreatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtSectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
   entryComponents:[ArtCreatorComponent]
})
export class ArtSectionModule { }
