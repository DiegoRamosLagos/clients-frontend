import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';

import Swal from 'sweetalert2';

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

  delete(client: Client): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: `Are you sure?\nClient: ${client.name} ${client.lastName} will be deleted`,
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.clientService.delete(client.id)
          .subscribe(
            response => {
              this.clients = this.clients.filter(cli => cli !== client)
              swalWithBootstrapButtons.fire(
                'Deleted!',
                `Your client: ${client.name} ${client.lastName} has been deleted.`,
                'success'
              );
            }
          );
      }
    });
  }

}
