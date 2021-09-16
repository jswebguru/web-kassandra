import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isLoginModel = false;
  loginObj: any = {
    username: '',
    password: ''
  };

  credentialsError = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onLogin(value: any, login: any): void {
    if (value.username === 'admin' && value.password === 'admin@123') {
      this.router.navigateByUrl('/chat');
    }
    else {
      this.credentialsError = true;
    }
  }

  toggleLoginModel(): void {
    this.isLoginModel = !this.isLoginModel;
  }

  closeModel(): void {
    this.isLoginModel = false;
  }
}
