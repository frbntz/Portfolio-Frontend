import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hskill } from '../model/hskill';

@Injectable({
  providedIn: 'root'
})
export class HskillService {
  hskillURL = 'https://dry-tor-61448.herokuapp.com/hskills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hskill[]> {
    return this.httpClient.get<Hskill[]>(this.hskillURL + 'lista');
  }

  public detail(id: number): Observable<Hskill> {
    return this.httpClient.get<Hskill>(this.hskillURL + `detail/${id}`);
  }

  public save(hskill: Hskill): Observable<any> {
    return this.httpClient.post<any>(this.hskillURL + 'create', hskill);
  }

  public update(id: number, hskill: Hskill): Observable<any> {
    return this.httpClient.put<any>(this.hskillURL + `update/${id}`, hskill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.hskillURL + `delete/${id}`);
  }
}
