import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTabsComponent } from './card-tabs.component';


@NgModule({
  declarations: [CardTabsComponent],
  imports: [
    CommonModule
  ],
  exports: [CardTabsComponent],
})
export class CardTabsModule { }
