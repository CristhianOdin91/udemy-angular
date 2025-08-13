import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  // Cuando se declaran los componentes dentro de un módulo es porque se van a usar dentro
  // del módulo, si fuera necesario su uso fuera se debería exportar
  declarations: [
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
