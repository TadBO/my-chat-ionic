import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRouters } from './user.routers';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRouters)
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
