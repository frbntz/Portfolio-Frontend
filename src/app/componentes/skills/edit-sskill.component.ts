import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-sskill',
  templateUrl: './edit-sskill.component.html',
  styleUrls: ['./edit-sskill.component.scss']
})
export class EditSskillComponent implements OnInit {
  softSkill: Skill = null;

  constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data => {
        this.softSkill = data;
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )  
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.softSkill).subscribe(
      data => {
        alert("Skill actualizada")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill");
      }
    )
  }

}
