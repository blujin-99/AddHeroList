import {Component} from '@angular/core';

@Component ({
selector : 'app-counter',
template:  `
<h1>INCREMENTANDO/RESTANDO NÚMEROS</h1>
{{numero}}
<button (click)="increment()">+</button>
<button (click)="reset()">reset</button>
<button (click)="rest()">-</button>
 `,

})


export class CounterComponente{
    public numero = 0;

    increment() :void{
      this.numero += 1;
    }
   
    rest() :void{
     this.numero-=1;
    }
   
    reset() :void{
     this.numero = 0
    }
}