import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ApiService } from './shared/services/api.service';
import { IdentidadeServiceService } from './identidade-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CardTabsModule } from './components/card-tabs/card-tabs.module';
import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { ListagemModule } from './listagem/listagem.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HeaderModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    CardTabsModule,
    CadastroPessoaModule,
    ListagemModule
  ],
  providers: [
    IdentidadeServiceService, 
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
