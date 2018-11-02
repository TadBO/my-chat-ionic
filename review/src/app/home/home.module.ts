import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';
import { HomeComponent } from '../home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
