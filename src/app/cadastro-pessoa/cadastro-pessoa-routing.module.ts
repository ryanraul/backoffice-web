import { NgModule } from '@angular/core';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CadastroPessoaComponent
  },  
  {
    path: ':id',
    component: CadastroPessoaComponent
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPessoaRoutingModule { }
