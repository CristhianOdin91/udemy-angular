import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',

  // Se declara una referencia local con el signo # seguido del
  // nombre de la referencia
  // Esa referencia sólo se reconoce del lado del template
  // NO se reconoce en el código TS del componente

  // Con (keyup.enter) sólo asocia el evento con la tecla 'enter'
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
  standalone: false
})
export class SearchBoxComponent {

  // El decorador ViewChild nos sirve para tomar UNA referencia local
  // ViewChildren sirve para tomar los elementos cuando existe más de uno
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value

    console.log({ newTag })    
  }
}
