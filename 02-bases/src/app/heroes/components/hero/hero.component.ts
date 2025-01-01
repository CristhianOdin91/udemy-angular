import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman'
  public age:  number = 45

  // Los getters en Angular se ven y se invocan
  // como si fueran propiedades
  get capitalizedName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'spiderman'
  }

  changeAge(): void {
    this.age = 23
  }

  resetForm(): void {
    this.name = 'ironman'
    this.age = 45
  }
}
