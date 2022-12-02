import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { SharedModule } from '../shared/shared.module';
import { ListagemComponent } from '../listagem/listagem.component';

@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule, 
    SharedModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [ListagemComponent]
})
export class ListagemModule { }
