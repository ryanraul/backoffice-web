export enum EQualificacao {
   Cliente = 1,
   Fornecedor = 2,
   Colaborador = 3,
}

export const EQualificacaoMap = new Map<number, string>([
   [EQualificacao.Cliente, 'Cliente'],
   [EQualificacao.Fornecedor, 'Fornecedor'],
   [EQualificacao.Colaborador, 'Colaborador'],
 ]);