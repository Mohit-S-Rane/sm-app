import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/models/user";
import { HttpService } from "./http-service";
import { Router } from "@angular/router";
import { AuthUtils } from "../utility/auth-utils";


@Injectable()
export class ApiService {

  constructor(private httpService: HttpService, private router: Router) {
  }

  login(data: { email: string, password: string }) {
    return this.httpService.post('/users/login', data);
  }

  signup(data: { emailId: string, password: string, name: string, mobileNo: number}) {
    return this.httpService.post('/users/register', data);
  }

  logout(){
    AuthUtils.removeAuthToken();
    this.router.navigate(['login'])
  }

  clientLogin(data: { email: string, password: string }) {
    return this.httpService.get('/clients/login', data);
  }

}