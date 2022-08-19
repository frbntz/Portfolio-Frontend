import { Component, OnInit } from '@angular/core';
import { Hskill } from 'src/app/model/hskill';
import { Skill } from 'src/app/model/skill';
import { HskillService } from 'src/app/service/hskill.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  sSkill: Skill[] = [];
  hSkill: Hskill[] = [];

  constructor(private sSkillS: SkillService, private hSkillS: HskillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSSkill();
    this.cargarHSkill();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSSkill(): void {
    this.sSkillS.lista().subscribe(
      data =>{
        this.sSkill = data;
      }
    )
  }

  cargarHSkill(): void {
    this.hSkillS.lista().subscribe(
      data =>{
        this.hSkill = data;
      }
    )
  }

  deleteSSkill(id?: number){
    if( id != undefined){
      this.sSkillS.delete(id).subscribe(
        data => {
          this.cargarSSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

    deleteHSkill(id?: number){
      if( id != undefined){
        this.hSkillS.delete(id).subscribe(
          data => {
            this.cargarHSkill();
          }, err => {
            alert("No se pudo eliminar");
          }
        )
      }
    }

}
