import {Component, EventEmitter, Input, Output} from '@angular/core';
import { v4 as uuid } from 'uuid'

import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Con @Input() entran propiedades desde afuera
  // Se define un dato que se puede enviar desde el componente padre
  // si no se envía toma el valor por defecto que tenga asignado
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onRemoveCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id: string): void {
    this.onRemoveCharacter.emit(id)
  }

}
