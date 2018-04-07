import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: any;

  constructor(
                private router: Router ) { }
                // private authService: AuthService,

  ngOnInit() {
  }

  login() {
    console.log('login..');
    // this.authService.isLoggedIn = true;
    // this.router.navigate(['/app/main']);
  }

}
