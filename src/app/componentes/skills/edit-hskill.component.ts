import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hskill } from 'src/app/model/hskill';
import { HskillService } from 'src/app/service/hskill.service';

@Component({
  selector: 'app-edit-hskill',
  templateUrl: './edit-hskill.component.html',
  styleUrls: ['./edit-hskill.component.scss']
})
export class EditHskillComponent implements OnInit {
  expHSkill: Hskill = null;

  constructor(private sHSkill: HskillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHSkill.detail(id).subscribe(
      data => {
        this.expHSkill = data;
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHSkill.update(id, this.expHSkill).subscribe(
      data => {
        alert("Skill actualizada")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill");
      }
    )
  }

}
