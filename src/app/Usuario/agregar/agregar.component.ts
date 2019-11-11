import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(usuario:Usuario){
    this.service.agregarUsuario(usuario)
    .subscribe(data=>{
      alert("se agrego el usuario con exito")
      this.router.navigate(["listar"]);
    })
  }

}
