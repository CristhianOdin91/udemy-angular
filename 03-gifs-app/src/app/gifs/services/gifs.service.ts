import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  // La propiedad se coloca como privada y se accede a ella
  // a través de un getter, para evitar que se haga una 
  // mutación directa por algún componente
  private _tagsHistory: string[] = []

  constructor() { }

  get tagsHistory() {
    // Se regresa un arreglo con spread operator para
    // evitar que se pase la referencia de JS
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase()

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0,10)
  }

  searchTag(tag: string): void{
    if (tag.length === 0) {
      return
    }

    this.organizeHistory(tag)
  }
  
}
