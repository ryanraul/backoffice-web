import { Component, OnInit } from '@angular/core';

import { IdentidadeServiceService } from '../identidade-service.service'

export interface Pessoa {
  tipoPessoa: number
  numeroDocumento: string
  nome: string
  apelido: string
  endereco: any
  dataCriacao: string
  dataAlteracao: string
  id: string
}

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'apelido', 'numeroDocumento', 'tipoPessoa' ];
  dataSource = null;
  constructor(private service: IdentidadeServiceService) { }

  ngOnInit(): void {
    this.recuperarPessoas();

  }

  recuperarPessoas(): void {
    this.dataSource = this.service.recuperarPessoas().subscribe(res => {
      this.dataSource = res;
    });
  }

}
