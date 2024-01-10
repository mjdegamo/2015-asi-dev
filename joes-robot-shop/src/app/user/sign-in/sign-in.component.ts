import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { IUserCredentials } from '../user.model';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signInError: boolean = false;

  credentials: IUserCredentials = {
    email: '',
    password: '',
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  signIn(): void {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => this.signInError = true
    })
  }

}
