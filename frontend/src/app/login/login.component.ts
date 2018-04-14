import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usercreds } from '../model/usercreds.model';
import { UtilService } from '../services/util.service';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: TokenPayload = {
    email: '',
    password: ''
  };
  @ViewChild('f') form: any;

  constructor( private router: Router,
               private utilService: UtilService,
               private auth: AuthenticationService, ) {
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/main');
    }
  }

  login() {
    this.auth.login(this.user).subscribe(() => {
      this.router.navigateByUrl('/main');
    }, (err) => {
      console.error(err);
    }); 
    //.then(res => console.log(res));
    // subscribe(res => console.log(res));
    // this.authService.isLoggedIn = true;
    // this.router.navigate(['/app/main']);
  }

}
