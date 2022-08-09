import { Component, OnInit } from '@angular/core';


declare var particlesJS: any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles.json', null);
  }

}
