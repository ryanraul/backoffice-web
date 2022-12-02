import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formPessoa: FormGroup;

  
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formPessoa = this.formBuilder.group({
      nome: ['', Validators.required],
      apelido: ['', []],
      tipoPessoa: ['', []],
      numeroDocumento: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
    },);
  }

  salvarPessoa(){

  }

}
