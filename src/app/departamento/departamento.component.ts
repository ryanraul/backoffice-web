import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentidadeServiceService } from '../identidade-service.service';
import { EQualificacao } from '../shared/enums/EQualificacao';
import DepartamentoCadastro from './models/DepartamentoCadastro';

interface PessoaSelect {
  id: string;
  nome: string;
}


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private service: IdentidadeServiceService,
  ) { }

  formDepartamento: FormGroup;
  listaPessoas: Array<PessoaSelect> = [];
  
  ngOnInit(): void{
    this.createForm();
    this.recuperarPessoas();
  }

  createForm() {
    this.formDepartamento = this.formBuilder.group({
      nome: ['', Validators.required],
      responsavelId: ['', Validators.required],
    },);
  }

  salvarDepartamento() {
    const departamentoCadastro: DepartamentoCadastro = {
      nome: this.formDepartamento.get('nome').value,
      responsavelId: this.formDepartamento.get('responsavelId').value,
    };

    this.service.salvarDepartamento(departamentoCadastro).subscribe(res => {
      this.formDepartamento.reset();
      this.formDepartamento.markAsUntouched();
    })
  }

  recuperarPessoas() {
    this.service.recuperarPessoasPorQualificacao(EQualificacao.Colaborador).subscribe(res => {
      this.listaPessoas = res;
    })
  }

}
