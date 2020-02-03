import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientService} from './clients/client.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clients/form.component';
import {FormsModule} from '@angular/forms'; // Agregado 30-01-2020

const routes: Routes = [ // Agregado 30-01-2020
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clients', component: ClientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Agregado 30-01-2020
    HttpClientModule, // 03-02-2020
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
