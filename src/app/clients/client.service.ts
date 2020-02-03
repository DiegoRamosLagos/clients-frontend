import { Injectable } from '@angular/core';
import {Client} from './client';
import {CLIENTS} from './clients.json';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint = 'http://localhost:8080/api/clients';

  getClients(): Observable<Client[]> {
    // return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndPoint);
  }
  constructor(private http: HttpClient) { }
}
