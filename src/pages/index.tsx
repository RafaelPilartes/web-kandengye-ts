import { useEffect, useRef, useState } from 'react'

// Navegação
import { useNavigate } from 'react-router-dom'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Grid } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Modulos de Icons
import { SiOpenai } from 'react-icons/si'
import { BsFillCheckCircleFill, BsFillPlayFill } from 'react-icons/bs'
import { GiSmartphone, GiSpikesFull } from 'react-icons/gi'
import {
  MdComputer,
  MdDesignServices,
  MdOutlineSupportAgent,
  MdOutlineWork
} from 'react-icons/md'
import { AiFillCode, AiFillStar } from 'react-icons/ai'
import { TfiWorld } from 'react-icons/tfi'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// AliceCarousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// Theme
import { defaultTheme } from '../themes/default'

// Styles
import { ContainerHome } from '../styles/pages/HomeStyles'

// Routs
import { routsNameMain } from '../data/routsName'

// Components
import { NavLink } from '../components/NavLink'

// images
import heroBg1 from '../assets/background/hero_bg_2_1-4.jpg'
import heroBg2 from '../assets/background/hero_bg_2_2-4.jpg'
import heroBg3 from '../assets/background/hero_bg_2_3-4.jpg'
import ButtonSeeMore from '../components/buttons/ButtonSeeMore'
import RenderServices from '../components/RenderServices'
import RenderVeicules from '../components/RenderVeicules'

function Home() {
  const router = useNavigate()

  useEffect(() => {}, [])

  const date = new Date()

  function solicitation() {}

  const responsive = {
    0: { items: 1 },
    250: { items: 2 },
    500: { items: 3 },
    750: { items: 4 },
    1000: { items: 5 }
  }
  const responsiveCars = {
    0: { items: 1 },
    250: { items: 2 },
    500: { items: 3 }
  }

  const docService = [
    {
      _id: 'g56rbe685j68r67',
      imgUrl: 'images/services/service-4-1.jpg',
      name: 'transporte municipal',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'efWEFRQ3GGRGshh',
      imgUrl: 'images/services/service-4-2.jpg',
      name: 'Transporte de bagagem',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: 'images/services/service-4-3.jpg',
      name: 'Marcação online',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl: 'images/services/service-4-4.jpg',
      name: 'Retirada de endereço',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    }
  ]
  const listService = docService.map((item, index) => (
    <RenderServices key={index} services={item} />
  ))

  const docVeicules = [
    {
      _id: 'g56rbe685j68r67',
      imgUrl: 'images/cars/car1.svg',
      name: 'Espere e Economize',
      role: 'Sem pressa para embarcar? Garanta um preço mais baixo com facilidade. O/A melhor motorista para sua rota e local de embarque.'
    },
    {
      _id: 'efWEFRQ3GGRGshh',
      imgUrl: 'images/cars/car2.svg',
      name: 'Embarque Prioritário',
      role: 'Faça o upgrade para o Embarque Prioritário para uma espera mais curta quando você estiver com pressa.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: 'images/cars/car3.svg',
      name: 'Modo preferencial',
      role: 'Leve sua corrida a um novo nível com mais espaço para as pernas, carros mais novos, os motoristas mais bem-avaliados .'
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl: 'images/cars/car4.png',
      name: 'Kandengye Lux',
      role: 'Experimente uma corrida de luxo privativa com os motoristas mais bem-avaliados, serviço de alta qualidade e espaço adicional para as pernas.'
    }
  ]
  const listVeicules = docVeicules.map((item, index) => (
    <RenderVeicules key={index} veicules={item} />
  ))

  function goTo(path: string) {
    router(path)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ContainerHome>
      <div className="containerSwiper">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          loop={true}
          autoplay={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="description">
              <span data-aos="fade-down">
                Serviço de reserva de táxi on-line 24 horas por dia, 7 dias por
                semana
              </span>
              <h1 data-aos="fade-down">
                Desfrutando Confortável <br /> Viagem Com Kandengye
              </h1>
              <span data-aos="fade-up">
                Escale dramaticamente os portais compatíveis com versões
                anteriores depois que os produtos de posicionamento de mercado
                predominarem servidamente.
              </span>

              <button data-aos="fade-up">
                {' '}
                <a href="">Saber mais</a>
              </button>
            </div>
            <img src={heroBg1} />
            <div className="shadow"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="description">
              <span data-aos="fade-down">
                Serviço de reserva de táxi on-line 24 horas por dia, 7 dias por
                semana
              </span>
              <h1 data-aos="fade-down">
                Desfrutando Confortável <br /> Viagem Com Kandengye
              </h1>
              <span data-aos="fade-up">
                Escale dramaticamente os portais compatíveis com versões
                anteriores depois que os produtos de posicionamento de mercado
                predominarem servidamente.
              </span>

              <button data-aos="fade-up">
                <a href="">Saber mais</a>
              </button>
            </div>

            <img src={heroBg2} />
            <div className="shadow"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="description">
              <span data-aos="fade-down">
                Serviço de reserva de táxi on-line 24 horas por dia, 7 dias por
                semana
              </span>
              <h1 data-aos="fade-down">
                Desfrutando Confortável <br /> Viagem Com Kandengye
              </h1>
              <span data-aos="fade-up">
                Escale dramaticamente os portais compatíveis com versões
                anteriores depois que os produtos de posicionamento de mercado
                predominarem servidamente.
              </span>

              <button data-aos="fade-up">
                {' '}
                <a href="">Saber mais</a>
              </button>
            </div>
            <img src={heroBg3} />
            <div className="shadow"></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentLeft">
              <div className="containerImg1" data-aos="fade-right">
                <img src="images/about01.jpg" alt="" />
              </div>

              <div className="containerImg" data-aos="fade-left">
                <img src="images/about02.jpg" alt="" />
              </div>
            </div>

            <div className="contentRight" data-aos="fade-up">
              <div className="containerTitleSection">
                <h4>Sobre nossa empresa</h4>
                <h1>EMPRESA DE TÁXI MAIS CONFIÁVEL EM ANGOLA</h1>
              </div>

              <p>
                Simplifique com autoridade os recursos de código aberto via
                back-end, visualize os mercados eletrônicos de negócios antes da
                convergência paralela, otimize o compartilhamento de ideias e o
                compartilhamento em vez de soluções exclusivas.
              </p>

              <ul>
                <li>
                  <BsFillCheckCircleFill /> Soluções fáceis e de emergência a
                  qualquer hora
                </li>
                <li>
                  <BsFillCheckCircleFill /> Obtendo preço acessível até 2 anos
                </li>
                <li>
                  <BsFillCheckCircleFill /> Equipes mais confiáveis ​​e
                  experientes
                </li>
              </ul>

              <div>
                <ButtonSeeMore
                  value={'Saber mais'}
                  onClick={() => goTo(routsNameMain.home)}
                  colorBase={defaultTheme.colors['brand-primary']}
                  colorSecondary={defaultTheme.colors['brand-super-dark']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourClients">
        <div className="containerContent">
          <div className="containerHeader">
            <div className="containerLeft">
              <div className="containerTitleSection">
                <div>
                  <h4>Nossos Serviços</h4>
                  <h1>NOSSOS MELHORES SERVIÇOS</h1>
                </div>
              </div>
            </div>

            <div className="containerRight" data-aos="fade-left">
              <p>
                Visualize perfeitamente itens de ação de ponta sem liderança
                oportuna. Visualize de forma conveniente um valor excepcional em
                relação a imperativos atraentes.
              </p>
            </div>
          </div>

          <div className="containerClientsRow" data-aos="fade-up">
            <AliceCarousel
              mouseTracking
              items={listService}
              responsive={responsive}
              autoPlay
              infinite
              autoPlayInterval={3000}
              animationDuration={2000}
            />
          </div>
        </div>
      </section>

      <section className="driver">
        <div className="containerContent">
          <div className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Faça seu próprio horário <strong>Ganhe do seu jeito</strong>
              </h1>

              <div className="contentDescriptions">
                <ul>
                  <li>
                    <BsFillCheckCircleFill />
                    <p>
                      <strong>Ganhos confiáveis:</strong>
                      <br />
                      Ganhe dinheiro, fique com suas gorjetas e resgate tudo
                      quando quiser.
                    </p>
                  </li>
                  <li>
                    <BsFillCheckCircleFill />
                    <p>
                      <strong>Um horário flexível:</strong>
                      <br />
                      Seja seu próprio chefe e dirija quando for mais
                      conveniente para você.
                    </p>
                  </li>
                  <li>
                    <BsFillCheckCircleFill />
                    <p>
                      <strong>Receba instantaneamente:</strong>
                      <br /> Resgate seus ganhos quando quiser.
                    </p>
                  </li>
                </ul>

                <button className="btn-background">
                  <a href="">Cadastre-se para dirigir</a>
                </button>
              </div>
            </div>

            <img
              data-aos="fade-up-left"
              src="https://broadwaycab.com/wp-content/uploads/2018/04/now-hiring-drivers.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="rider">
        <div className="containerContent">
          <div className="section3">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Às suas marcas, preparar, já com apenas alguns toques rápidos
                <strong>Sempre</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Qualquer que seja seu destino, levaremos você aonde você
                  precisa chegar
                </p>

                <ul>
                  <li>
                    <BsFillCheckCircleFill /> Encontre uma corrida confiável em
                    poucos minutos
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Agende a sua corrida com
                    antecedência
                  </li>
                  <li>
                    <BsFillCheckCircleFill /> Saiba que seu motorista está
                    usando uma máscara
                  </li>
                </ul>

                <button className="btn-background">
                  <a href="">Solicitar uma corrida</a>
                </button>
              </div>
            </div>

            <img
              data-aos="fade-up-left"
              src="https://covertrip.com/wp-content/uploads/2022/02/taxi-safety.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="freeConsulting">
        <div className="containerLinesLeft" data-aos="fade-up">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <div className="containerLinesRight" data-aos="fade-down">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="containerLinesRightInvert">
          <div className="line1"></div>
        </div>

        <div className="containerContent">
          <div className="contentFreeConsulting">
            <div data-aos="fade-right">
              <h1>Para onde vamos hoje?</h1>
              <h3>
                Uma corrida é muito mais do que apenas uma corrida. É a porta de
                entrada para oportunidades ou empregos. Uma conexão com a
                comunidade.
              </h3>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Escolher destino'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="security">
        <div className="containerContent">
          <div className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                Sua segurança em primeiro lugar <strong>Sempre</strong>
              </h1>

              <div className="contentDescriptions">
                <p data-aos="fade-right">
                  Nós cuidamos de você antes, durante e depois de cada corrida.
                  E monitoramos todas as corridas para ajudar você a chegar ao
                  seu destino. Caso precise, estamos prontos para ajudar.
                </p>
              </div>
            </div>

            <img
              data-aos="fade-up-left"
              src="https://mid.curitiba.pr.gov.br/2018/capa/00221449.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="ourVeicules">
        <div className="containerContent">
          <div className="containerHeader">
            <div className="containerLeft">
              <div className="containerTitleSection">
                <div>
                  <h4>Nossos veículos</h4>
                  <h1>VEÍCULOS QUE TEMOS DISPONÍVEIS PARA SI!!</h1>
                </div>
              </div>
            </div>

            <div className="containerRight" data-aos="fade-left">
              <p>
                Temos opções para levar você aonde precisa chegar. Escolha uma
                corrida ou passeio* de acordo com seu humor e com quanto quer
                gastar.
              </p>
            </div>
          </div>

          <div className="containerVeiculesRow" data-aos="fade-up">
            <AliceCarousel
              mouseTracking
              items={listVeicules}
              responsive={responsiveCars}
              autoPlay
              infinite
              autoPlayInterval={3000}
              animationDuration={2000}
            />
          </div>
        </div>
      </section>
    </ContainerHome>
  )
}

export default Home
