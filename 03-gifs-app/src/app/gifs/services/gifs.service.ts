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

  searchTag(tag: string): void{

    this._tagsHistory.unshift(tag)

  }
  
}
