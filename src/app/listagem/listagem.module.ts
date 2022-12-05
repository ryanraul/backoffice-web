import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { SharedModule } from '../shared/shared.module';
import { ListagemComponent } from '../listagem/listagem.component';
import { MatMenuModule } from '@angular/material/menu';
import { ListagemRoutingModule } from './listagem-routing.module';

@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule, 
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    ListagemRoutingModule,
  ],
  exports: [ListagemComponent]
})
export class ListagemModule { }
