import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private serviceUrl= '/v1/';

  constructor(private http:HttpClient){
   }

   all(): Promise<any>{
     return this.http.get(this.serviceUrl + 'crud' + '/listar')
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


   crear(usuario: any){
     return this.http.post<Usuario>(this.serviceUrl + 'crud' + '/crear',usuario);
   }

   getPersonarId(id: number){
     return this.http.get<Usuario>(this.serviceUrl +'/'+id);
   }

   updatePersona(usuario:Usuario){
     return this.http.put<Usuario>(this.serviceUrl+'/'+usuario.id,usuario)
   }

}
