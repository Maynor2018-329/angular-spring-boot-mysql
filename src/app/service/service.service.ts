import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private serviceUrl= '/v1/';

  
  constructor(private http:HttpClient){
   }

   all(): Promise<any>{
     return this.http.get(this.serviceUrl + 'crud')
     .toPromise()
     .then(r => Object.assign(r,{json: () => r}));
   }

   getParams(req: any): HttpParams{
     let params = new HttpParams();

     if(req && req.size){
       params = params.set('size', req.size);
     }
     return params;
   }


  agregarUsuario(usuario:Usuario){
    return this.http.post(this.serviceUrl , 'crud');
  }

}
