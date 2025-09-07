import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// const GIPHY_API_KEY = 'dRrYS7vOByjO41Rdf1Bnkd9DisdGj7c5'

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = []

  // La propiedad se coloca como privada y se accede a ella
  // a través de un getter, para evitar que se haga una 
  // mutación directa por algún componente
  private _tagsHistory: string[] = []
  private apiKey: string = 'dRrYS7vOByjO41Rdf1Bnkd9DisdGj7c5'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

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

    this.saveLocalStorage()
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  searchTag(tag: string): void{
    if (tag.length === 0) {
      return
    }

    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    // Lo que regresa no es una promesa, es un Observable
    // y además es genérico, es decir, que se le puede especificar
    // el tipo de dato que regresa
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data
      })

    /*
    // Alternativa de uso
    fetch('https://api.giphy.com/v1/gifs/search?api_key=dRrYS7vOByjO41Rdf1Bnkd9DisdGj7c5&q=funny%20cats&limit=10')
      .then(resp => resp.json())
      .then(data => console.log(data))
    */
  }
  
}
