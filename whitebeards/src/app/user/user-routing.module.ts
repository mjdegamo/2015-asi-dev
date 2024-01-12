import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, },
  { path: 'register', component: RegisterComponent, },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
