import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient, private httpService: HttpService) {}

  getClients(): Observable<any> {
    return this.httpService.get('/clients');
  }

  addClient(client: any): Observable<any> {
    return this.httpService.post('/clients/register', client);
  }

  editClient(client: any): Observable<any> {
    return this.httpService.patch('/clients/update', client);
  }

  deleteClient(clientId: string): Observable<any> {
    return this.httpService.delete('/clients/remove',clientId);
  }
}
