import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AgregarComponent } from './Usuario/agregar/agregar.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import {FormsModule, ReactiveFormsModule}from '@angular/forms'
import { ServiceService } from './service/service.service';
import {HttpClientModule}from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
