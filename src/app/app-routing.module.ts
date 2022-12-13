import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./listagem/listagem.module').then((m) => m.ListagemModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./cadastro-pessoa/cadastro-pessoa.module').then((m) => m.CadastroPessoaModule)
  },
  {
    path: 'departamento',
    loadChildren: () => import('./departamento/departamento.module').then((m) => m.DepartamentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
