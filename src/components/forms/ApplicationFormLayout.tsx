import { ReactNode } from 'react'

import HeroSection from '../HeroSection'

interface ApplicationFormLayoutProps {
  heroImage: string
  heroTitle: string
  breadcrumb: string[]
  title: string
  description?: string
  children: ReactNode
}

/**
 * Moldura partilhada das duas páginas de candidatura: faixa de topo, título
 * e a coluna onde o formulário assenta.
 *
 * Já não abre o `<form>`: quem o abre é o `StepForm`, que precisa de o
 * controlar para travar a submissão fora do último passo.
 */
export function ApplicationFormLayout({
  heroImage,
  heroTitle,
  breadcrumb,
  title,
  description,
  children
}: ApplicationFormLayoutProps) {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection
        backgroundImage={heroImage}
        title={heroTitle}
        breadcrumb={breadcrumb}
      />

      <section className="container-page section-padding">
        <div className="mx-auto w-full max-w-[46rem]">
          <h2 className="font-title text-display-sm font-extrabold tracking-tight text-ink">
            {title}
          </h2>
          {description && (
            <p className="mt-5 max-w-[56ch] text-lede text-mute">
              {description}
            </p>
          )}

          <div className="mt-14">{children}</div>
        </div>
      </section>
    </div>
  )
}

export default ApplicationFormLayout
