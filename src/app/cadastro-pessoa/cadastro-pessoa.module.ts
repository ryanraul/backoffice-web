import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';

@NgModule({
  declarations: [CadastroPessoaComponent],
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
    NgxMaskModule.forRoot(),
    CadastroPessoaRoutingModule,
    ],
  exports: [CadastroPessoaComponent]
})
export class CadastroPessoaModule { }
