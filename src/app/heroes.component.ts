import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
  
  <h1>Hello {{angulr}} : {{title}} </h1>
  <h2>{{hero1.name}} Details</h2>
  <div><label>id: </label>{{hero1.id}}</div>
  <div><label>name: </label>{{hero1.name}}</div>
  

  <div>
    <label>name: </label>
    <input [(ngModel)]="hero1.name" placeholder="name">
     <!-- input  type = "text" [value]="hero.name"
        (input) = "hero.name = $event.target.value" -->
  </div>

  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>

  `,
    styleUrls: [ './heroes.component.css' ]

  
})
export class HeroesComponent   implements OnInit { 
  
  angulr = 'Angular'; 
  title = 'Tour of Heroes';

  hero1: Hero = {
    id: 1,
    name: 'Windstorm'
  };
   heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
  

