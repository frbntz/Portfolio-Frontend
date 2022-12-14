import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './componentes/acerca-de/edit-acercade.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditHskillComponent } from './componentes/skills/edit-hskill.component';
import { EditSskillComponent } from './componentes/skills/edit-sskill.component';
import { NewHskillComponent } from './componentes/skills/new-hskill.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevaexp', component:NewExperienciaComponent },
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'editarpersona/:id', component: EditAcercadeComponent},
  {path:'edithskill/:id', component: EditHskillComponent},
  {path:'editsskill/:id', component: EditSskillComponent},
  {path:'nuevahskill', component: NewHskillComponent},
  {path:'nuevoproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
