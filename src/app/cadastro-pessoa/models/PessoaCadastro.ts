import { EQualificacao } from 'src/app/shared/enums/EQualificacao';
import { ETipoPessoa } from './ETipoPessoa'

export default class PessoaCadastro {
   id?: string;
   nome: string;
   apelido: string;
   tipoPessoa: ETipoPessoa;
   numeroDocumento: string;
   qualificacao: EQualificacao;
   endereco: Endereco;
}

export class Endereco {
   cep: string;
   rua: string;
   uf: string;
   bairro: string;
   complemento: string;
   cidade: string;
}


