export enum ETipoPessoa {
   Fisica = 1,
   Juridica = 2
}

export const ETipoPessoaMap = new Map<number, string>([
   [ETipoPessoa.Fisica, 'Física'],
   [ETipoPessoa.Juridica, 'Jurídica'],
 ]);