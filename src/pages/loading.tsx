const letters = 'KANDENGUE'.split('')

/**
 * Ecra de espera do `React.Suspense`.
 *
 * O original tinha uma caixa fixa de 1300px com `margin-left: -300px` — saia
 * do ecra em qualquer telemovel — e os mesmos keyframes repetidos quatro
 * vezes por prefixos de fabricante. Agora e uma faixa centrada que se adapta.
 */
function Loading() {
  return (
    <section
      role="status"
      aria-live="polite"
      aria-label="A carregar"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-[4px]"
    >
      <div className="relative h-20 w-full max-w-2xl overflow-visible">
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            aria-hidden
            style={{ animationDelay: `${index * 0.2}s` }}
            className="loading-letter absolute top-0 select-none font-title text-[2.5rem] font-bold text-red sm:text-[3rem]"
          >
            {letter}
          </span>
        ))}
      </div>

      <span className="sr-only">A carregar…</span>
    </section>
  )
}

export default Loading
