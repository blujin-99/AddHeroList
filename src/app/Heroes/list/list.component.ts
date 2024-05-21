import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['spiderman','thor','Ironman','Hulk','capitan América'];
  public deteledHero?:string  
  
  removeLastHero(): void {
    this.deteledHero = this.heroNames.pop();
  }

  removeHero(heroId: number):void{

  }
}
