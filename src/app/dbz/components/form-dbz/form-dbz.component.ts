 import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icharacter } from '../../interfaces/character.interface';

 @Component({
  selector: 'app-form-dbz',
  templateUrl: 'form-dbz.component.html'
 })

 export class FormDBZComponent {

  @Output()
  public onNewCharacter : EventEmitter<Icharacter> = new EventEmitter()

  public character :Icharacter =
    {
      name:'',
      power:10
    }

    emitEvent() : void{
      console.log(this.character);
      const nuevoPersoanje = this.character
      if(this.character.name.length === 0) return;
      this.onNewCharacter.emit(nuevoPersoanje);
      this.resetForm();
    }

    resetForm() : void{
     this.character = {name:'', power:0}
    }
 }
