import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL + 'traer/perfil') 
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + 'editar/${id}', persona)
  }
    
    //tirale a la concatenación la URL que falte para un get en el java o en la direccion

}
