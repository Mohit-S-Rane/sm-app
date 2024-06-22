import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api-service";


@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
  //   styleUrls: ['./logout.component.css'],
  })
  export class LogoutComponent {
    constructor(private apiService: ApiService, private router: Router) {
        this.apiService.logout();
        this.router.navigate(['']);
    }
  }