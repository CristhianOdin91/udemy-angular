import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman']
  public deletedHero: string = ''

  public deletedHeroNames: string[] = []

  removeLastHero(): void {
    this.heroNames.forEach(name => {
      this.deletedHero = name
    })

    this.deletedHeroNames = [ this.deletedHero, ...this.deletedHeroNames ]

    this.heroNames = this.heroNames.filter(name => name !== this.deletedHero)
  }
}
