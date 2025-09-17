import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  standalone: false,
})
export class LazyImageComponent {
  @Input()
  url: string = '';

  @Input()
  alt: string = '';

  private _hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Url property is required');
    }
  }

  get hasLoaded() {
    return this._hasLoaded;
  }
  
  onLoad() {
    this._hasLoaded = true;
  }
}
