import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainDBZComponent } from './pages/main-dbz.component';
import { ListComponent } from './components/list/list.component';
import { FormDBZComponent } from './components/form-dbz/form-dbz.component';


@NgModule({
  declarations: [
    MainDBZComponent,
    ListComponent,
    FormDBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainDBZComponent]
})

export class DbzModule { }
