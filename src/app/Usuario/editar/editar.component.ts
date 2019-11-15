import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import{Usuario} from 'src/app/Modelo/Usuario';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  usuario : Usuario = new Usuario();
  form: FormGroup;
  entity: Usuario = {};

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
    this.form = new FormGroup({
      nombre : new FormControl(''),
      cargo: new FormControl('')
    })

  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonarId(+id)
    .subscribe(data=>{
      this.usuario = data;
    })
  }
}
