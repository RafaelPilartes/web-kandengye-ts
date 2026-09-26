import { memo } from 'react'

export interface ServiceCardProps {
  imgUrl: string
  title: string
  description: string
}

/**
 * Cartão de serviço.
 *
 * Antes a descrição estava escondida e só aparecia no hover — invisível em
 * telemóvel, onde não há hover, e invisível para quem lê com leitor de ecrã.
 * Agora lê-se sempre; o hover só aproxima a imagem.
 */
const ServiceCard = memo(({ imgUrl, title, description }: ServiceCardProps) => {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden rounded-2xl bg-mute-line">
        <img
          src={imgUrl}
          alt={title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <h3 className="mt-6 font-title text-title-m font-bold text-ink">
        {title}
      </h3>
      <p className="mt-2.5 max-w-[46ch] text-base leading-relaxed text-mute">
        {description}
      </p>
    </article>
  )
})

ServiceCard.displayName = 'ServiceCard'

export default ServiceCard
