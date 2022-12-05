import { ETipoPessoa } from './ETipoPessoa'

export default class PessoaCadastro {
   id?: string;
   nome: string;
   apelido: string;
   tipoPessoa: ETipoPessoa;
   numeroDocumento: string;
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


