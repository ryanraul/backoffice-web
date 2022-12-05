import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemTab } from './components/card-tabs/card-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backofficeweb';

  itensTab: Array<ItemTab> = [ 
    { id: 1, titulo: 'Listagem', url: 'home' }, 
    { id: 2, titulo: 'Cadastro', url: 'registro' } 
  ];
  tabAtual = this.itensTab[0].id;

  constructor(private router: Router){ }
  
  alterarTab(tabId) {
    this.tabAtual = tabId;
    let tabSelecionada = this.itensTab.find(x => x.id == tabId).url;
    console.log('oiiiii',tabId);
    this.router.navigateByUrl(tabSelecionada);  
  }
}
