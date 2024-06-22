import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { Observable } from 'rxjs';

export @Injectable({
  providedIn: 'root'
})
class CustomerService {
  private apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getCustomers(): Observable<any> {
    return this.httpService.get('/customers');
  }

  addCustomer(customer: any): Observable<any> {
    return this.httpService.post('/customers/register', customer);
  }

  editCustomer(customer: any): Observable<any> {
    return this.httpService.patch('/customers/update', customer);
  }

  deleteCustomer(customerId: string): Observable<any> {
    return this.httpService.delete('/customers/remove', customerId);
  }
}
