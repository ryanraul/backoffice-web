import { Component, OnInit } from '@angular/core';
import { ItemTab } from '../components/card-tabs/card-tabs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itensTab: Array<ItemTab> = [ 
    { id: 1, titulo: 'Listagem' }, 
    { id: 2, titulo: 'Cadastro' } 
  ];
  tabAtual = this.itensTab[0].id;

  constructor() { }

  ngOnInit(): void {
  }

  alterarTab(tabSelecionada) {
    this.tabAtual = tabSelecionada;
  }

}
