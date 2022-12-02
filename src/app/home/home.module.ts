import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemModule } from '../listagem/listagem.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardTabsModule } from '../components/card-tabs/card-tabs.module';
import { CadastroPessoaModule } from '../cadastro-pessoa/cadastro-pessoa.module';

@NgModule({
    
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CardTabsModule,
    CadastroPessoaModule,
    ListagemModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
