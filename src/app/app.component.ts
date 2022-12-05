import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemTab } from './components/card-tabs/card-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'backofficeweb';

  itensTab: Array<ItemTab> = [ 
    { id: 1, titulo: 'Listagem', url: 'home' }, 
    { id: 2, titulo: 'Cadastro', url: 'registro' } 
  ];
  tabAtual= null;

  constructor(
    private router: Router,
  ){ }

  ngOnInit(): void {
  }
  
  alterarTab(tabId) {
    this.tabAtual = tabId;
    let tabSelecionada = this.itensTab.find(x => x.id == tabId).url;
    this.router.navigateByUrl(tabSelecionada);  
  }
}
