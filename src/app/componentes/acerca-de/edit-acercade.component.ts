import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.scss']
})
export class EditAcercadeComponent implements OnInit {
  persona: Persona = null;


  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.getPersona().subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar atributos");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        alert("Atributos actualizados")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar atributos");
      }
    )
  }

}
