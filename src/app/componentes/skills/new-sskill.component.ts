import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-sskill',
  templateUrl: './new-sskill.component.html',
  styleUrls: ['./new-sskill.component.scss']
})
export class NewSskillComponent implements OnInit {
  nombre: string = '';
  softSkill: string = '';

  constructor(private sSSkill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.softSkill);
    this.sSSkill.save(skill).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert ("No se pudo añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

}
