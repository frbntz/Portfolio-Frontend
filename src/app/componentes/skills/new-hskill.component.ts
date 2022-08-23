import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hskill } from 'src/app/model/hskill';
import { HskillService } from 'src/app/service/hskill.service';

@Component({
  selector: 'app-new-hskill',
  templateUrl: './new-hskill.component.html',
  styleUrls: ['./new-hskill.component.scss']
})
export class NewHskillComponent implements OnInit {
  nombre: string = '';
  porcentaje: string = '';
  img: string = '';
  color: string = '';

  constructor(private sHSkill: HskillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hskill = new Hskill(this.nombre, this.porcentaje, this.img, this.color);
    this.sHSkill.save(hskill).subscribe(
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
