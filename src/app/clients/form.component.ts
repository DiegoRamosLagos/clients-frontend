import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import {ActivatedRoute, Router} from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  private client: Client = new Client();
  private title = 'Create Client';
  constructor(private clientService: ClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadClient();
  }

  loadClient(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.clientService.getClient(id).subscribe( (client) => this.client = client );
      }
    });
  }

  create(): void {
    console.log('Clicked');
    console.log(this.client);
    this.clientService.create(this.client)
      .subscribe(client => {
        this.router.navigate(['/clients']);
        swal.fire('New Client', `Client: ${client.name} ${client.lastName}`, 'success' );
      }
    );
  }

  update(): void {
    this.clientService.update(this.client)
      .subscribe(client => {
        this.router.navigate(['/clients']);
        swal.fire('Client updated', `Client: ${client.name} ${client.lastName}`, 'success' );
      });
  }


}
