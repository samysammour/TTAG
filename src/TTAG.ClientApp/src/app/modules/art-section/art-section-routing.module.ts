import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtSectionComponent } from './art-section.component';
import { ArtCreatorComponent } from './creation/art-creator/art-creator.component';

const routes: Routes = [
  { path: 'art', component: ArtSectionComponent },
  { path: 'art/create', component: ArtCreatorComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ArtSectionRoutingModule {
}
