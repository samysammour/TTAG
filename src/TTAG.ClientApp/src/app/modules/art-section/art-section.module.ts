import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtSectionRoutingModule } from './art-section-routing.module';
import { ArtSectionComponent } from './art-section.component';

const COMPONENTS = [ArtSectionComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ArtSectionRoutingModule
  ],
  exports: [...COMPONENTS]
})
export class ArtSectionModule { }
