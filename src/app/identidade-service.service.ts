import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import PessoaCadastro from './cadastro-pessoa/models/PessoaCadastro';
import EnderecoWs from './cadastro-pessoa/models/EnderecoWs';
import { ApiService } from './shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class IdentidadeServiceService {
  urlDominio: string;

  constructor(private apiService: ApiService, private httpClient: HttpClient) {
    this.urlDominio = 'https://localhost:5001'
}

  public recuperarPessoas(): Observable<any> {
    return this.apiService
        .get(`${this.urlDominio}/api/Pessoa/pessoas`)
        .pipe(
            map((res: any) => res.data),
            catchError((error) => throwError(error))
        )
  }

  public salvarPessoa(dadosPessoa: PessoaCadastro): Observable<any> {
    let url = `${this.urlDominio}/api/Pessoa/salvar-pessoa`;
    return this.apiService.post(url, dadosPessoa)
        .pipe(
            map(res => res.data),
            catchError(error => throwError(error)));
  }

  public editarPessoa(dadosPessoa: PessoaCadastro): Observable<any> {
    let url = `${this.urlDominio}/api/Pessoa/editar-pessoa/${dadosPessoa.id}`;
    return this.apiService.put(url, dadosPessoa)
        .pipe(
            map(res => res.data),
            catchError(error => throwError(error)));
  }

  public recuperaEndereco(cep:string): Observable<EnderecoWs> {
    return this.apiService
      .get(`//viacep.com.br/ws/${cep}/json/`)
      .pipe(
        catchError((error) => throwError(error))
      )
  }

  public buscarPessoa(pessoaId): Observable<any> {
    return this.apiService
    .get(`${this.urlDominio}/api/Pessoa/pessoas/${pessoaId}`)
    .pipe(
        map((res: any) => res.data),
        catchError((error) => throwError(error))
    )
  }

  public removerPessoa(pessoaId): Observable<any> {
    return this.apiService.delete(`${this.urlDominio}/api/Pessoa/remover/${pessoaId}`)
      .pipe(
        map(res => res.data),
        catchError(error => throwError(error))
      );
  }


}
