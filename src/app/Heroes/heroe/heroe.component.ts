import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre : string='pitter'
  public edad : number = 0

  get Named(): string {
    return "Heroe";
  }

  getName(): string {
    return `${this.nombre} - ${this.edad} `
  }

  changeName():void{
    this.nombre = "spiderman";
  }

  changeAge():void{
    this.edad = 30
  }

}
