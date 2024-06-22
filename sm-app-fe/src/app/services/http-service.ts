import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from 'rxjs';
import { AlertService } from "./alert-service";

@Injectable()
export class HttpService {
  private base_url = 'http://localhost:8000/api/v1';

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService,
    private router: Router
  ) { }

  get(url?: string, paramData?: any): Observable<any> {
    const data = { params: paramData };
    return this.httpClient
      .get(this.base_url + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient
      .post(this.base_url + url, body).pipe(catchError(this.errorHandler.bind(this)));
  }

  patch(url: string, body: any): Observable<any> {
    console.log(body);
    
    return this.httpClient
      .patch(this.base_url + url, body).pipe(catchError(this.errorHandler.bind(this)));
  }

  delete(url: string, body: any): Observable<any> {    
    return this.httpClient
      .delete(this.base_url + url + `/${body}`).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: any) {
    const error = response.error;
    const message = response.message;
    const status = response.status;
    if (status === 401) {
    }
    this.alertService.error(message);
    return throwError({ message, error });
  }
}