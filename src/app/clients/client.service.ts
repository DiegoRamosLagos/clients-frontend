import { Injectable } from '@angular/core';
import {Client} from './client';
import {CLIENTS} from './clients.json';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getClients(): Observable<Client[]> {
    // return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {headers: this.httpHeaders});
  }

  constructor(private http: HttpClient) { }
}
