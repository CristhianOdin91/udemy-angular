import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MainPageComponent} from './pages/main-page.component';
import {ListComponent} from './components/list/list.component';
import {AddCharacterComponent} from './components/add-character/add-character.component'

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    // El único componente que se necesita exportar es este
    // Ya que los demás componentes sólo son útiles dentro del
    // mismo módulo
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
