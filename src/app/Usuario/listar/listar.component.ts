import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.all().then(data=>{
      this.usuarios=data;
    })
  }


}
