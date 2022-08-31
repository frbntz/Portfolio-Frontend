import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  sskillURL = 'https://dry-tor-61448.herokuapp.com/sskills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.sskillURL + 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.sskillURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.sskillURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.sskillURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.sskillURL + `delete/${id}`);
  }
}
