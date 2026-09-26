import CountUp from 'react-countup'
import { BsCheck2Circle } from 'react-icons/bs'
import { IoArrowForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import TeamMemberCard from '../components/cards/TeamMemberCard'
import { routsNameMain } from '../data/routsName'
import { cn } from '../utils/cn'
import { solutions } from '../data/solutions'
import { teamAdmins, teamDirectors, teamLead } from '../data/team'

import heroBg from '../assets/header/hero_bg_1.jpg'
import driverPhoto3 from '../assets/photos/driverBlackAndRed.jpg'
import driverPhoto4 from '../assets/photos/driverBlackPay.jpg'

const stats = [
  { value: 7, label: 'Clientes activos' },
  { value: 16, label: 'Corridas' },
  { value: 2, label: 'Anos gloriosos' },
  { value: 4, label: 'Motoqueiros profissionais' }
]

function About() {

  return (
    <div className="flex flex-col">
      <HeroSection
        backgroundImage={heroBg}
        title="Sobre nós"
        breadcrumb={['Sobre']}
      />

      <section className="container-page flex flex-col items-start justify-between gap-16 py-16 xl:flex-row">
        <div className="relative flex w-full flex-col items-start justify-start xl:w-[45%]">
          <div className="relative flex w-full flex-row flex-wrap">
            <div
              className="relative flex w-full items-end justify-center overflow-hidden rounded-xl"
            >
              <img
                src={driverPhoto3}
                alt="Estafetas da Kandengue Atrevido"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>

            {/*
              A segunda imagem sobrepunha-se com `top: 16rem; right: -7rem`
              fixos — saia do ecra em portatil. Agora so se destaca quando ha
              espaco para isso.
            */}
            <div className="mt-4 block w-2/3 overflow-hidden rounded-xl border-8 border-white shadow-card xl:absolute xl:-right-16 xl:top-64 xl:mt-0 xl:max-h-80 xl:max-w-80">
              <img
                src={driverPhoto4}
                alt="Pagamento de uma corrida"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="flex w-full flex-col gap-6 xl:w-1/2">
          <SectionHeading
            eyebrow="Sobre a empresa"
            title="Breves considerações sobre a KA"
          />

          <p className="text-base leading-8 text-mute">
            Kandengue Atrevido (KA) é uma empresa jovem e inovadora, criada com
            o objectivo de oferecer serviços de transporte, sobretudo no ramo
            das entregas. Com uma equipa de jovens empreendedores, procura
            trazer uma abordagem fresca e ousada ao sector.
          </p>
          <p className="text-base leading-8 text-mute">
            O diferencial da KA está na dedicação a um serviço de qualidade,
            rápido e eficiente. A empresa entende a importância de responder às
            necessidades dos clientes com agilidade, garantindo entregas seguras.
          </p>
          <p className="text-base leading-8 text-mute">
            Com uma visão empreendedora e uma equipa dedicada, a KA tem
            conquistado cada vez mais clientes satisfeitos e estabelecido-se
            como referência no ramo da entrega.
          </p>

          <ul className="flex flex-col gap-4">
            {[
              'Transporte rápido, seguro e eficaz.',
              'Serviço multifuncional.'
            ].map(item => (
              <li
                key={item}
                className="flex flex-row items-center gap-2.5 text-[0.96rem] font-medium text-mute"
              >
                <BsCheck2Circle aria-hidden className="shrink-0 text-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mb-24">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-8 gap-y-16 px-4 py-16">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="flex w-full min-w-32 max-w-56 flex-1 flex-col items-center justify-center gap-1"
            >
              <div className="flex flex-row justify-center">
                {/*
                  O `delay={4}` de antes só arrancava a contagem quatro
                  segundos depois de a página montar — já ninguém estava a
                  olhar. Agora conta quando a secção entra no ecrã.
                */}
                <CountUp
                  end={stat.value}
                  separator=" "
                  enableScrollSpy
                  scrollSpyOnce
                  className="font-title text-[4rem] font-extrabold text-ink"
                />
                <span className="text-[2.2rem] font-semibold text-ink">
                  +
                </span>
              </div>
              <h3 className="text-center text-base uppercase text-red">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page grid gap-x-10 gap-y-14 py-24 md:grid-cols-3">
          {solutions.map(solution => (
            <ServiceCard
              key={solution.id}
              imgUrl={solution.imgUrl}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </section>

      <section className="container-page section-padding">
        {/* Centrado, para partilhar o eixo com a pirâmide que vem a seguir. */}
        <SectionHeading
          align="center"
          title="Conheça a nossa equipa"
          description="Da administração às direcções — as pessoas que respondem quando precisa de alguma coisa."
        />

        {/*
          Pirâmide: o presidente em cima, sozinho e ao centro, depois a
          administração e, na base, as direcções.

          A grelha tem seis colunas e cada cartão ocupa duas, por isso todos
          ficam com a mesma largura — é o que faz a pirâmide ler-se como
          hierarquia e não como três filas de tamanhos diferentes. O
          `col-start` empurra cada fila para o meio; o resto é colocação
          automática. Abaixo de `lg` desfaz-se em duas colunas e depois numa,
          porque uma pirâmide num ecrã estreito é só uma coluna estreita.
        */}
        <div className="mx-auto mt-14 grid max-w-[54rem] grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2 lg:col-start-3">
            <TeamMemberCard {...teamLead} />
          </div>

          {teamAdmins.map((member, index) => (
            <div
              key={`admin-${member.name}-${index}`}
              className={cn('lg:col-span-2', index === 0 && 'lg:col-start-2')}
            >
              <TeamMemberCard {...member} />
            </div>
          ))}

          {teamDirectors.map(member => (
            <div key={member.name} className="lg:col-span-2">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </section>

      <ClosingBand />
    </div>
  )
}

/**
 * Faixa de fecho.
 *
 * Estava a meio da página, entre os valores e a equipa, a interromper a
 * leitura com um botão solto que dizia só "Kandengue". Agora fecha a
 * página — que é onde uma chamada à acção pertence — e oferece os dois
 * caminhos reais de quem chega aqui: conduzir, ou vender connosco.
 */
function ClosingBand() {
  const paths = [
    {
      title: 'Quero conduzir',
      text: 'Candidate-se a estafeta e comece a ganhar o seu kumbu.',
      to: routsNameMain.becomeDriver,
      cta: 'Candidatar-se'
    },
    {
      title: 'Tenho um negócio',
      text: 'Ligue a sua loja a quem já anda na rua todos os dias.',
      to: routsNameMain.contact,
      cta: 'Falar connosco'
    }
  ]

  return (
    <section className="bg-red">
      <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:py-24">
        {paths.map(path => (
          <div
            key={path.title}
            className="flex flex-col items-start border-t-2 border-white/30 pt-7"
          >
            <h2 className="font-title text-title-l font-extrabold text-white">
              {path.title}
            </h2>
            <p className="mt-3 max-w-[38ch] text-lede text-white/80">
              {path.text}
            </p>

            <Link
              to={path.to}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              {path.cta}
              <IoArrowForward aria-hidden />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
