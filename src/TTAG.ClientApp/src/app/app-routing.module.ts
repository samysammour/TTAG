import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
        { path : "welcome", component : WelcomeComponent } ,
        { path : "" ,  redirectTo:'/welcome'  ,pathMatch: 'full'} 
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
