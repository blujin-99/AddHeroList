import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output() deleteCharacter : EventEmitter<number> = new EventEmitter();

  @Input() public characterList: Icharacter[] = [{
    name:'trunks',
    power:10
  }]

  listaInversaAUltimo(){
    const reverse = []
     for (let index = this.characterList.length - 1; index >= 0; index--) {
          reverse.push(this.characterList[index])
     }
     this.characterList = reverse
  }

  onDeleteCharacter(id:number):void{
    this.deleteCharacter.emit(id)
  }

}
