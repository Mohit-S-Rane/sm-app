import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent {
  loginForm: FormGroup;
  loading = false;
  isAlive = true;

  constructor(private apiService: ApiService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login() {
    // console.log(this.loginForm.value);
    this.apiService.clientLogin(this.loginForm.value).subscribe(response => {
      console.log(response);
      
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('role', 'CLIENT');

      this.router.navigate(['/dashboard']);
    }, error => {
      console.error('Login failed', error);
    });
  }

  signup(){
    this.router.navigate(['signup'])
  }
}