import {Component, EventEmitter, Output} from '@angular/core';

import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // * @Output() se ocupa para mandar propiedades hacia afuera
  // * es decir, a un nivel superior
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public emptyCharacter: Character = {
    id: '',
    name: '',
    power: 0
  }

  public character: Character = { ...this.emptyCharacter }

  emitCharacter(): void {

    // ! Con la instrucción "debugger" se
    // ! crea un punto de interrupción (breakpoint)
    // ! para hacer debug
    // ? También se puede hacer desde el navegador en la
    // ? pestaña "Fuentes"
    // > debugger

    if (this.character.name.length === 0) {
      return
    }

    this.onNewCharacter.emit(this.character)

    this.character = { ...this.emptyCharacter }
  }

}
