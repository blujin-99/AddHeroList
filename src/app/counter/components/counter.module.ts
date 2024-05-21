import { NgModule } from "@angular/core";
import { CounterComponente } from "./counter/counter.component";

@NgModule({
  declarations: [
    CounterComponente
  ],
  exports:[
    CounterComponente
  ]
})

export class  CouterModules {}

