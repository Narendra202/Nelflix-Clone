declare var google: any;

import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  // private router = Inject(Router);

  constructor(private router : Router){}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '680218353056-6rrl7ocrl1cb961p09lo2s2e78etgj9l.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

  private decodeToken(token:string) {
      return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //  decode the taken
      const payLoad = this.decodeToken(response.credential);
      //  store in session 
      sessionStorage.setItem('LoginUser', JSON.stringify(payLoad));
      //  navigate to home/browse
      this.router.navigate(['browse'])
    }
  }


}
