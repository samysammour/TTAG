import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtSectionRoutingModule } from './art-section-routing.module';
import { ArtSectionComponent, ArtCreatorDialog } from './art-section.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ArtSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtSectionRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [
    MatDialog  
  ],

   entryComponents:[ArtCreatorDialog]
})
export class ArtSectionModule { }
