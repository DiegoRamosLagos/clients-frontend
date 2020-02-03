import { Component, OnInit } from '@angular/core';
import {Client} from './client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  private client: Client = new Client();
  private title = 'Create Client';
  constructor() { }

  ngOnInit() {
  }

  create(): void {
    console.log('Clicked');
    console.log(this.client);
  }
}
