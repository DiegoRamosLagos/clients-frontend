import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    // Suscribe porque Observable
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );
  }

}
