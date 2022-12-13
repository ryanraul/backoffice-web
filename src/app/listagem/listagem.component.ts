import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ETipoPessoa, ETipoPessoaMap } from '../cadastro-pessoa/models/ETipoPessoa';

import { IdentidadeServiceService } from '../identidade-service.service'
import { EQualificacao, EQualificacaoMap } from '../shared/enums/EQualificacao';

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
  displayedColumns: string[] = [ 'nome', 'apelido', 'tipoPessoa', 'numeroDocumento', 'qualificacao', 'acoes' ];
  dataSource = null;
  constructor(
    private service: IdentidadeServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recuperarPessoas();

  }

  recuperarPessoas(): void {
    this.dataSource = this.service.recuperarPessoas().subscribe(res => {
      this.dataSource = res;
    });
  }

  direcionarEditarPessoa(pessoaId: string) {
    this.router.navigate([`registro/${pessoaId}`]);
  }

  removerPessoa(pessoaId: string) {
    this.service.removerPessoa(pessoaId).subscribe(res => {
      this.recuperarPessoas();
    })
  }

  recuperaDescricaoTipoPessoa(tipoPessoa: ETipoPessoa): string {
    return ETipoPessoaMap.get(tipoPessoa);
  }

  recuperaDescricaoQualificacao(qualificacao: EQualificacao): string {
    return EQualificacaoMap.get(qualificacao);
  }

}
