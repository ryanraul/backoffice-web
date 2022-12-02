import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './home/home.module';
import { ApiService } from './shared/services/api.service';
import { IdentidadeServiceService } from './identidade-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HeaderModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    IdentidadeServiceService, 
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
