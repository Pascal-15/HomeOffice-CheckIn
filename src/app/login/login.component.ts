import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoggedIn: boolean = false

  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true
    this.router.navigate(["/start"])
  }
}
