import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DepartamentoComponent} from './departamento.component'
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroPessoaRoutingModule } from '../cadastro-pessoa/cadastro-pessoa-routing.module';
import { DepartamentoRoutingModule } from './departamento-routing.module';



@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonToggleModule,
    DepartamentoRoutingModule
  ],
  exports: [DepartamentoComponent]
})
export class DepartamentoModule { }
