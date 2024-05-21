import { Component, OnInit } from '@angular/core';
import { Icharacter } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-dbz',
  templateUrl: 'main-dbz.component.html'
})

export class MainDBZComponent {

  public character : Icharacter[] = [{
    name:'Krilin',
    power:1000
  },
  {
    name:'goku',
    power:9500
  },
  {
    name:'vegeta',
    power:9000
  }
];


NewCharacter(character:Icharacter):void{
    this.character.push(character)
}

onDeleteCharacter(id:number):void{
   this.character.splice(id,1)
}

}
