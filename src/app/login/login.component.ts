import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoggedIn: boolean = false;
  inputUsername: String = "";
  inputPassword: String = "";

  //Approved users
  user: User[] = [
    {username: "test", password: "test", workingTime: ""},
    {username: "test2", password: "test2", workingTime: ""}
  ]

  constructor(private router: Router, private fb: FormBuilder) {}


  //Get data from input fields
  getUsername(usrName: string) {
    this.inputUsername = usrName;
  }
  getPassword(usrPW: string) {
    this.inputPassword = usrPW;
  }


  login() {
    //Proof login data
    for (let i = 0; i < this.user.length; i++) {
      if (this.inputUsername === this.user[i].username && this.inputPassword === this.user[i].password) {
        this.isLoggedIn = true;
        this.router.navigate(["/timer"]);
      }
    }
    if (this.isLoggedIn != true) {
      alert("Falsche Login Informationen");
    }
  }
}
