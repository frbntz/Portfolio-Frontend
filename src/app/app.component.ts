import { Component } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio'; 

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles.json', console.log("particles.json fue cargado correctamente"));
  }
}

