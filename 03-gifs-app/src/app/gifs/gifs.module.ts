import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  // Cuando se declaran los componentes dentro de un módulo es porque se van a usar dentro
  // del módulo, si fuera necesario su uso fuera se debería exportar
  declarations: [
    CardComponent,
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
