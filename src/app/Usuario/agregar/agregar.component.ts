import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form: FormGroup;
  entity: Usuario = {};

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      cargo: new FormControl('')
    })
  }

  guardar() {

    if (this.entity) {
      this.entity.nombre = this.form.get('nombre').value;
      this.entity.cargo = this.form.get('cargo').value;
    }

    this.service.crear(this.entity)
    .subscribe (data=>{
      alert("se agrego el usuario con exito");
      this.router.navigate(['listar']);
    })
  }
}
