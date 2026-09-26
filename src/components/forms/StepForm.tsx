import { FormEvent, ReactNode, useMemo, useState } from 'react'
import { IoArrowBack, IoArrowForward, IoCheckmark } from 'react-icons/io5'

import { cn } from '../../utils/cn'
import Button from '../ui/Button'

export interface FormStep {
  /** Título do passo, mostrado na barra de progresso e acima dos campos. */
  title: string
  description?: string
  fields: ReactNode
  /**
   * Devolve uma mensagem quando o passo não está pronto para avançar, ou
   * `null` quando está. É o que trava o botão "Continuar".
   */
  validate?: () => string | null
}

interface StepFormProps {
  steps: FormStep[]
  isSubmitting?: boolean
  submitLabel: string
  onSubmit: (event: FormEvent) => void
  /** Chamado quando a validação de um passo recusa o avanço. */
  onInvalid?: (message: string) => void
}

/**
 * Formulário em passos.
 *
 * As candidaturas pediam quinze campos e três anexos de uma só vez — um
 * ecrã que assustava antes de se ler. Partido em passos, cada ecrã faz uma
 * pergunta de cada vez e mostra onde se está.
 *
 * Os campos de todos os passos ficam montados; só os que não são o passo
 * actual é que estão escondidos com o atributo `hidden`. É de propósito:
 * desmontá-los perderia o que já lá estava escrito, e mantê-los montados
 * deixa a validação nativa do browser funcionar na submissão final.
 */
export function StepForm({
  steps,
  isSubmitting = false,
  submitLabel,
  onSubmit,
  onInvalid
}: StepFormProps) {
  const [current, setCurrent] = useState(0)
  const [furthest, setFurthest] = useState(0)

  const isLast = current === steps.length - 1
  const step = steps[current]

  const progress = useMemo(
    () => Math.round(((current + 1) / steps.length) * 100),
    [current, steps.length]
  )

  function goTo(index: number) {
    setCurrent(index)
    setFurthest(f => Math.max(f, index))
    // Sobe ao topo do formulário, senão o passo novo abre a meio.
    document
      .getElementById('step-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleNext() {
    const message = step.validate?.()
    if (message) {
      onInvalid?.(message)
      return
    }
    goTo(current + 1)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    // Guarda: o último passo também tem de passar na sua validação.
    const message = step.validate?.()
    if (message) {
      onInvalid?.(message)
      return
    }

    onSubmit(event)
  }

  return (
    <div id="step-form" className="scroll-mt-28">
      {/* Progresso ---------------------------------------------------- */}
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-sm font-semibold text-red">
            Passo {current + 1} de {steps.length}
          </p>
          <p className="text-sm text-mute">{progress}%</p>
        </div>

        <div
          className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-mute-line"
          role="progressbar"
          aria-valuenow={current + 1}
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-label={`Passo ${current + 1} de ${steps.length}: ${step.title}`}
        >
          <div
            className="h-full rounded-full bg-red transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Os títulos dos passos, clicáveis até onde já se chegou. */}
        <ol className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {steps.map((item, index) => {
            const isDone = index < furthest || (index < current)
            const isCurrent = index === current
            const canJump = index <= furthest

            return (
              <li key={item.title}>
                <button
                  type="button"
                  disabled={!canJump || isSubmitting}
                  onClick={() => canJump && goTo(index)}
                  aria-current={isCurrent ? 'step' : undefined}
                  className={cn(
                    'flex items-center gap-2 text-sm transition-colors',
                    canJump ? 'cursor-pointer' : 'cursor-default',
                    isCurrent
                      ? 'font-semibold text-ink'
                      : canJump
                        ? 'text-mute hover:text-red'
                        : 'text-mute-light'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold',
                      isCurrent
                        ? 'bg-red text-white'
                        : isDone
                          ? 'bg-ink text-white'
                          : 'bg-mute-line text-mute'
                    )}
                  >
                    {isDone && !isCurrent ? (
                      <IoCheckmark aria-hidden />
                    ) : (
                      index + 1
                    )}
                  </span>
                  {item.title}
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Campos -------------------------------------------------------- */}
      <form onSubmit={handleSubmit} className="mt-10">
        {steps.map((item, index) => (
          <div
            key={item.title}
            hidden={index !== current}
            aria-hidden={index !== current}
          >
            <h3 className="font-title text-title-m font-bold text-ink">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 max-w-[56ch] text-base text-mute">
                {item.description}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-7">{item.fields}</div>
          </div>
        ))}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-mute-line pt-8">
          <Button
            type="button"
            variant="ghost"
            onClick={() => goTo(current - 1)}
            disabled={current === 0 || isSubmitting}
            icon={<IoArrowBack aria-hidden />}
            className={cn(current === 0 && 'invisible')}
          >
            Voltar
          </Button>

          {isLast ? (
            <Button type="submit" isLoading={isSubmitting}>
              {submitLabel}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleNext}
              iconEnd={<IoArrowForward aria-hidden />}
            >
              Continuar
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default StepForm
