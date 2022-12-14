import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentidadeServiceService } from '../identidade-service.service';
import { EQualificacao } from '../shared/enums/EQualificacao';
import { ETipoPessoa, ETipoPessoaMap } from './models/ETipoPessoa';
import PessoaCadastro, { Endereco } from './models/PessoaCadastro';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private service: IdentidadeServiceService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  pessoaId: string = '';
  formPessoa: FormGroup;
  listaTipoPessoa: Array<any> = [];
  
  ngOnInit(): void {
    this.pessoaId = this.route.snapshot.params.id;
    if(this.pessoaId)
      this.recuperarPessoa();
      
    this.preenchimentoOpcoesTipoPessoa();
    this.createForm();
    
  }

  private preenchimentoOpcoesTipoPessoa() {
    this.listaTipoPessoa = [...ETipoPessoaMap].map(([chave, valor]) => ({
      chave: chave,
      valor: valor,
    }));
  }

  recuperarPessoa() {
    this.service.buscarPessoa(this.pessoaId).subscribe(res => {
      this.atribuirFormularioEdicao(res);
    });
  }

  atribuirFormularioEdicao(pessoa: PessoaCadastro) {
    this.formPessoa.setValue({
      nome: pessoa.nome,
      apelido: pessoa.apelido,
      tipoPessoa: pessoa.tipoPessoa,
      numeroDocumento: pessoa.numeroDocumento,
      cep: pessoa.endereco.cep,
      rua: pessoa.endereco.rua,
      uf: pessoa.endereco.uf,
      bairro: pessoa.endereco.bairro,
      complemento: pessoa.endereco.complemento,
      cidade: pessoa.endereco.cidade
    });
  }

  createForm() {
    this.formPessoa = this.formBuilder.group({
      nome: ['', Validators.required],
      apelido: ['', []],
      tipoPessoa: [ETipoPessoa.Fisica, []],
      numeroDocumento: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      qualificacao: ['', [Validators.required]],
    },);
  }

  salvarPessoa(){
    const endereco: Endereco = {
      cep: this.formPessoa.get('cep').value,
      rua: this.formPessoa.get('rua').value,
      uf: this.formPessoa.get('uf').value,
      bairro: this.formPessoa.get('bairro').value,
      complemento: this.formPessoa.get('complemento').value,
      cidade: this.formPessoa.get('cidade').value,
    }

    console.log(`teste`, endereco);
    const pessoaCadastro: PessoaCadastro = {
      nome: this.formPessoa.get('nome').value,
      apelido: this.formPessoa.get('apelido').value,
      tipoPessoa: this.formPessoa.get('tipoPessoa').value,
      numeroDocumento: this.formPessoa.get('numeroDocumento').value,
      qualificacao: this.formPessoa.get('qualificacao').value,
      endereco: endereco
    };
    console.log(`teste`, pessoaCadastro);

    if(this.pessoaId) {
      pessoaCadastro.id = this.pessoaId;
      this.service.editarPessoa(pessoaCadastro).subscribe(res => {
        this.limparResetarFormulario();
      })
      return;
    }

    this.service.salvarPessoa(pessoaCadastro).subscribe(res => {
      this.limparResetarFormulario();
    })
  }

  limparResetarFormulario() {
    this.formPessoa.reset();
    this.formPessoa.markAsUntouched();
  }

  preencheEndereco(event){
    if(this.formPessoa.get('cep').invalid) return;
    const cepSemFormatacao = event.target.value.replace("-","");

    this.service.recuperaEndereco(cepSemFormatacao).subscribe(res => {
      if(!res) return;

      this.formPessoa.patchValue({
        rua: res.logradouro,
        bairro: res.bairro,
        cidade: res.localidade,
        uf: res.uf,
        complemento: res.complemento,
      })
    })
  }

  get eTipoPessoa(): typeof ETipoPessoa {
    return ETipoPessoa;
  }

  get eQualificacao(): typeof EQualificacao {
    return EQualificacao;
  }
}
