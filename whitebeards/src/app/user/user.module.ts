import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    RegisterComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    UserRoutingModule
  ],
  exports: [
  ]
})
export class UserModule { }
