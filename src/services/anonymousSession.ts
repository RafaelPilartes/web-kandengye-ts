import { signInAnonymously } from 'firebase/auth'

import { auth } from '../config/firebase.config'

/**
 * Garante uma sessão anónima antes de um envio de ficheiro.
 *
 * ── Porque é que isto existe ──
 * As regras do Storage (saída **A**, no ar desde 2026-10-18) deixam um
 * candidato **criar** ficheiros em `applications/**` **sem sessão**, porque
 * era isso ou partir este formulário. O custo é que qualquer pessoa pode
 * escrever ficheiros novos ali.
 *
 * A saída **B** fecha isso: a regra passa a exigir `request.auth != null`, e é
 * esta função que o garante.
 *
 * ── ⚠️ Porque é que NÃO lança quando falha ──
 * A ordem de subida é **fornecedor anónimo → este site → regra apertada**, e
 * entre o segundo e o terceiro passo a regra ainda é a (A), que aceita sem
 * sessão.
 *
 * Se isto lançasse, um site novo com o fornecedor anónimo ainda desligado na
 * consola partia o formulário **imediatamente** — e o erro
 * (`auth/operation-not-allowed`) não diz nada a um candidato. Como a regra
 * (A) ainda aceita, seguir sem sessão funciona; quando a regra apertar, o
 * fornecedor já está ligado e isto já não falha.
 *
 * ⚠️ **O que isto NÃO é: uma barreira a sério.** O `signInAnonymously` está
 * aberto a quem tiver a chave web, que está no pacote do site. O que a sessão
 * dá é um `uid` — e é o `uid` no caminho que impede um candidato de escrever
 * por cima de outro. Sem isso, a (B) quase só muda o nome da porta.
 */
export async function ensureAnonymousSession(): Promise<boolean> {
  if (auth.currentUser) return true

  try {
    await signInAnonymously(auth)
    return true
  } catch (error) {
    /*
     * Fica no log e segue. A causa mais provável é o fornecedor anónimo
     * desligado na consola (`auth/operation-not-allowed`).
     */
    console.error('Não foi possível abrir uma sessão anónima:', error)
    return false
  }
}
