/*
 * As fotografias eram um hotlink para um retrato em branco na Wikimedia —
 * dependia de um servidor de fora e nao chegava a carregar. Sem retratos
 * reais, `photo` fica por preencher e o cartao desenha as iniciais.
 */
export interface TeamMember {
  name: string
  memberFunction: string
  photo?: string
}

/** Primeira fila: o presidente do conselho, sozinho e ao centro. */
export const teamLead: TeamMember = {
  name: 'Geovani Nascimento',
  memberFunction: 'Presidente do conselho administrativo'
}

/** Segunda fila: administracao. */
export const teamAdmins: TeamMember[] = [
  {
    name: 'Geovani Nascimento',
    memberFunction: 'Administrador'
  },
  {
    name: 'Geovani Nascimento',
    memberFunction: 'Administrador'
  }
]

/** Terceira fila: direccoes. */
export const teamDirectors: TeamMember[] = [
  {
    name: 'Nataniel Mário',
    memberFunction: 'Director administrativo e financeiro'
  },
  {
    name: 'Higino de Menezes',
    memberFunction: 'Director de intercâmbio, imagem e comunicação'
  },
  {
    name: 'Sebastião Gomes',
    memberFunction: 'Director de segurança, tecnologia e informação'
  }
]
