import { Component, Input } from '@angular/core';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  standalone: false
})
export class CardComponent {
  @Input() 
  gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }
}
