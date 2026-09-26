import { memo } from 'react'

export interface TeamMemberCardProps {
  photo?: string
  name: string
  memberFunction: string
}

const TeamMemberCard = memo(
  ({ photo, name, memberFunction }: TeamMemberCardProps) => {
    const initials = name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase())
      .join('')

    return (
      <article className="group flex flex-col">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
          {photo ? (
            <img
              src={photo}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            /* Sem retrato, as iniciais. Melhor do que um rectângulo vazio
               ou um hotlink para um servidor de fora que pode não responder. */
            <span
              aria-hidden
              className="flex h-full w-full items-center justify-center font-title text-title-l font-extrabold text-white/15"
            >
              {initials}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-title text-title-xs font-bold text-ink">
          {name}
        </h3>
        <p className="mt-1 text-sm leading-snug text-mute">{memberFunction}</p>
      </article>
    )
  }
)

TeamMemberCard.displayName = 'TeamMemberCard'

export default TeamMemberCard
