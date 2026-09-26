import { useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IoArrowForward } from 'react-icons/io5'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'

import { DOWNLOAD_ANCHOR } from '../components/Header'
import SectionHeading from '../components/SectionHeading'
import StoreBadges from '../components/StoreBadges'
import FeatureSection from '../components/home/FeatureSection'
import { routsNameMain } from '../data/routsName'
import { cn } from '../utils/cn'

import heroBg1 from '../assets/background/hero_bg_2_1-4.jpg'
import heroBg2 from '../assets/background/hero_bg_2_2-4.jpg'
import heroBg3 from '../assets/background/hero_bg_2_3-4.jpg'
import driverPhoto1 from '../assets/photos/driverBlack.jpg'
import driverPhoto2 from '../assets/photos/driverRed.jpg'

const heroSlides = [
  { image: heroBg1, alt: 'Estafetas da Kandengue Atrevido em serviço' },
  { image: heroBg2, alt: 'Entrega a ser recolhida em Luanda' },
  { image: heroBg3, alt: 'Moto-táxi em circulação' }
]

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Promise />

      <FeatureSection
        title="Torne-se um kandengue e ganhe o seu kumbu numa boa"
        paragraphs={[
          'Venha a correr e habilite-se a facturar mais de 300 paus por mês.'
        ]}
        bullets={[
          {
            strong: 'Kumbu na hora',
            text: 'Ganhe kumbu, fique com as suas gorjetas e levante tudo quando quiser.'
          },
          {
            strong: 'Um horário flexível',
            text: 'Faça o seu kumbu sem se preocupar com o horário. Seja o seu próprio boss.'
          }
        ]}
        image={driverPhoto1}
        imageAlt="Estafeta da Kandengue Atrevido"
        action={{
          label: 'Inscrever-se para conduzir',
          href: routsNameMain.becomeDriver
        }}
      />

      <PartnerSection />

      <FeatureSection
        title="Segurança em primeiro lugar, sempre"
        paragraphs={[
          'Simplifique a sua vida com a Kandengue Atrevido: a entrega que vai além das expectativas.',
          'Cuidamos de si e da sua encomenda antes, durante e depois de cada corrida, e acompanhamos todas as viagens para ajudar a chegar ao destino. Se precisar, estamos prontos para ajudar.'
        ]}
        image={driverPhoto2}
        imageAlt="Motorista da Kandengue Atrevido"
      />

      <DownloadBand />
    </div>
  )
}

/**
 * Herói em duas metades: o texto assenta sobre preto, e a fotografia sangra
 * ao lado sem véu nenhum por cima.
 */
function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="relative bg-ink">
      {/*
        `grid-cols-1` explicito: sem ele, a coluna implicita e `auto`, e o
        Swiper — que dimensiona os slides pelo conteudo — esticava-a para
        11 milhoes de px, atirando o texto do heroi para fora do ecra. So
        acontecia abaixo de `lg`, onde o `minmax(0,…)` nao se aplica.
      */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div className="flex flex-col justify-center px-[6%] py-16 lg:py-20 xl:pl-[8%]">
          {/*
            Curto de propósito. A versão longa enchia cinco linhas e empurrava
            o botão para fora do ecrã. (Português de Angola: nada de "você".)
          */}
          <h1 className="max-w-[12ch] font-title text-display font-extrabold text-white">
            As entregas são connosco.
          </h1>

          <p className="mt-7 max-w-[48ch] text-lede text-white/65">
            Trate do seu negócio — a encomenda vai connosco. Moto-táxi e
            entregas em Luanda, com o percurso acompanhado até à porta.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              to={DOWNLOAD_ANCHOR}
              className="inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-deep"
            >
              Descarregar a app
              <IoArrowForward aria-hidden />
            </Link>

            <Link
              to={routsNameMain.becomeDriver}
              className="text-base font-semibold text-white underline decoration-red decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-red"
            >
              Quero ser estafeta
            </Link>
          </div>
        </div>

        <div className="relative min-h-[18rem] w-full min-w-0 overflow-hidden sm:min-h-[22rem] lg:min-h-[38rem]">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            // O único movimento não pedido da página inteira, e é lento.
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
            className="h-full w-full"
          >
            {heroSlides.map(({ image, alt }) => (
              <SwiperSlide key={image}>
                <img
                  src={image}
                  alt={alt}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Indicador do carrossel: traços, não bolas. */}
          <div className="absolute bottom-6 left-6 z-10 flex gap-2">
            {heroSlides.map(({ image }, index) => (
              <span
                key={image}
                className={cn(
                  'h-1 rounded-full transition-all duration-500',
                  index === activeSlide ? 'w-10 bg-red' : 'w-5 bg-white/40'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Três promessas, logo a seguir ao herói. Responde ao "porquê estes?". */
function Promise() {
  const items = [
    {
      title: 'Chega na hora',
      text: 'A corrida é atribuída ao estafeta mais perto da recolha.'
    },
    {
      title: 'Vê onde vai',
      text: 'Acompanhe o percurso no mapa, do levantamento à entrega.'
    },
    {
      title: 'Preço combinado à partida',
      text: 'O valor aparece antes de confirmar. Sem surpresas no fim.'
    }
  ]

  return (
    <section className="border-b border-mute-line bg-white">
      <div className="container-page grid gap-x-10 gap-y-10 py-16 md:grid-cols-3 md:py-20">
        {items.map(item => (
          <div key={item.title} className="border-t-2 border-red pt-5">
            <h2 className="font-title text-title-m font-bold text-ink">
              {item.title}
            </h2>
            <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-mute">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/*
 * Tornar-se parceiro é mesmo uma sequência de três passos — é por isso que
 * leva números. (Numerar o que não é sequência é só enfeite.)
 */
const partnerSteps = [
  {
    title: 'Fale connosco',
    text: 'Conte-nos o que vende, de onde sai e para onde costuma entregar.'
  },
  {
    title: 'Ligamos a sua operação',
    text: 'A sua loja passa a ter estafetas disponíveis nos horários que definir.'
  },
  {
    title: 'Acompanhe cada entrega',
    text: 'Relatórios de venda e o percurso de cada encomenda, em tempo real.'
  }
]

/**
 * Secção de parceria.
 *
 * Eram duas: uma faixa vermelha com um título e um botão, e logo a seguir
 * uma secção "Vantagens de ser parceiro" com o conteúdo todo. A faixa
 * anunciava o que a secção seguinte já dizia, e não acrescentava nada —
 * daí parecer vazia. Agora é uma só, e diz como a coisa funciona.
 */
function PartnerSection() {
  return (
    <section className="bg-ink">
      <div className="container-page grid gap-x-20 gap-y-14 py-20 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <SectionHeading
            tone="light"
            title="Torne-se parceiro"
            description="Trabalhe com quem entende de entregas. Ligamos o seu negócio a quem já anda na rua de Luanda todos os dias."
          />

          <Link
            to={routsNameMain.contact}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-deep"
          >
            Falar connosco
            <IoArrowForward aria-hidden />
          </Link>
        </div>

        <ol className="flex flex-col">
          {partnerSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-6 border-t border-ink-line py-8 first:border-t-0 first:pt-0 last:pb-0 sm:gap-10"
            >
              {/* Largura fixa: sem ela o "01" e o "02" medem diferente na
                  Baloo 2 e os títulos ficam desalinhados uns dos outros. */}
              <span
                aria-hidden
                className="w-[2.4ch] shrink-0 font-title text-title-l font-extrabold leading-none text-red"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="font-title text-title-m font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[46ch] text-base leading-relaxed text-white/60">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/**
 * Faixa de fecho da página.
 *
 * Era branca: a mockup do telemóvel é clara e desaparecia no fundo, e a
 * secção seguinte — o rodapé — já é escura, por isso a página acabava com
 * um vazio e logo um bloco preto. Em vermelho, a mockup destaca-se e a
 * transição para o rodapé fica marcada.
 */
function DownloadBand() {
  const items = [
    'O serviço de moto-táxi mais barato',
    'Chegue ao seu destino rapidamente',
    'É só descarregar e instalar'
  ]

  return (
    <section id="descarregar" className="scroll-mt-24 overflow-hidden bg-red">
      <div className="container-page grid items-end gap-10 pt-20 md:grid-cols-2 md:pt-24">
        <div className="pb-20 md:pb-24">
          <h2 className="max-w-[14ch] font-title text-display-sm font-extrabold text-white">
            A Kandengue vai até onde desejar
          </h2>

          <ul className="mt-8 flex flex-col gap-3.5">
            {items.map(item => (
              <li
                key={item}
                className="flex items-center gap-3 text-lede text-white/85"
              >
                <BsFillCheckCircleFill aria-hidden className="shrink-0 text-white/60" />
                {item}
              </li>
            ))}
          </ul>

          <StoreBadges className="mt-10" />
        </div>

        {/* A mockup assenta na aresta de baixo da faixa, em vez de flutuar. */}
        <div className="justify-self-center self-end md:justify-self-end">
          <img
            src="/images/mokup/mokup1.png"
            alt="A aplicação Kandengue Atrevido no telemóvel"
            loading="lazy"
            className="block w-full max-w-[17rem] drop-shadow-2xl lg:max-w-[20rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
