import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  hide = true;
  constructor(private router: Router) { }
  login(loginForm: any) {
    if (loginForm.valid) {
     
      console.log("Form submitted successfully!");
      this.router.navigate(['/dashboard']); 
    } else {
      console.log("Form is invalid!");
    }
  }
}

