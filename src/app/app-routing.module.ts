import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { AgregarComponent } from './Usuario/agregar/agregar.component';
import { EditarComponent } from './Usuario/editar/editar.component';


const routes: Routes = [
{path: 'listar', component: ListarComponent},
{path: 'agregar', component:AgregarComponent},
{path: 'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
