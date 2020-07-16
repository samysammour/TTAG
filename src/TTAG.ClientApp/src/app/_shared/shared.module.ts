import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtCategoryPipe } from './pipes/art-category.pipe';

const COMPONENTS = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: []
})
export class SharedModule {}
