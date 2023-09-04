import { useEffect } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Theme
import { defaultTheme } from '../themes/default'

// Component
import HeroSection from '../components/HeroSection'

// Styles
import { ContainerAbout } from '../styles/pages/AboutStyles'
import { BsCheck2Circle, BsFillCheckCircleFill } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { MdComputer, MdDesignServices } from 'react-icons/md'
import ButtonSeeMore from '../components/buttons/ButtonSeeMore'
import { routsNameMain } from '../data/routsName'
import CountUp from 'react-countup'
import { NavLink } from '../components/NavLink'

// Images
// import imgBuildora from '../../../public/clients/buildora.png'
import imgProcess1 from '../../public/process/process1.png'
import imgProcess2 from '../../public/process/process2.png'
import imgProcess3 from '../../public/process/process3.png'
import imgProcess4 from '../../public/process/process4.png'
import imgProcess5 from '../../public/process/process5.png'
import imgProcess6 from '../../public/process/process6.png'
import { useNavigate } from 'react-router-dom'
import { AiFillStar, AiFillCode } from 'react-icons/ai'
import RenderSolutions from '../components/RenderSolutions'
import RenderMemberTeam from '../components/RenderMemberTeam'

import heroBg4 from '../assets/header/hero_bg_1.jpg'
import driverPhoto3 from '../assets/photos/driverBlackAndRed.jpg'
import driverPhoto4 from '../assets/photos/driverBlackPay.jpg'
import driverRed2 from '../assets/photos/driverRed2.jpg'
import driverBlack2 from '../assets/photos/driverBlack2.jpg'
import driverBlackAndRed2 from '../assets/photos/driverBlackAndRed2.jpg'

function About() {
  const router = useNavigate()

  const NumClients = 7
  const numProjects = 16
  const numYears = 2
  const numExperts = 4

  function goTo(path: string) {
    router(path)
  }

  const docSolutions = [
    {
      imgUrl: driverRed2,
      title: 'Missão',
      description:
        'Oferecer soluções logísticas e eficientes para os nossos clientes, garantindo entregas rápidas e seguras, com o compromisso de conectar pessoas e negócios em toda Angola',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl: driverBlack2,
      title: 'Visão',
      description:
        'Ser reconhecida como empresa lider em soluções de logísticas de entregas, superando as expectativas dos clientes com eficiência, confiabilidade e inovação, contribuindo para o crescimento e sucesso dos nossos parceiros de negocio',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl: driverBlackAndRed2,
      title: 'Valores',
      description:
        'Promover a humildde, semear o respeito, estimular a pontualidade e servir com qualidade',
      icon: <AiFillCode size={36} />
    }
  ]
  const listSolutions = docSolutions.map((item, index) => (
    <RenderSolutions
      key={index}
      imgUrl={item.imgUrl}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />
  ))

  const docTeam = [
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/463px-Blank_portrait%2C_male_%28rectangular%29.png',
      name: 'Nataniel Mário',
      memberFunction: 'Diretor administrativo financeiro'
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/463px-Blank_portrait%2C_male_%28rectangular%29.png',
      name: 'Higino de Menezes',
      memberFunction: 'Diretor de intercâmbio, imagem e comunicação'
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/463px-Blank_portrait%2C_male_%28rectangular%29.png',
      name: 'Sebastião Gomes',
      memberFunction: 'Diretor de segurança, tecnologia e informação'
    }
  ]

  const listTeam = docTeam.map((item, index) => (
    <RenderMemberTeam
      key={index}
      photo={item.photo}
      name={item.name}
      memberFunction={item.memberFunction}
    />
  ))

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerAbout>
      <HeroSection backgroundImage={heroBg4} title="Sobre nós" base1="Sobre" />

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentLeft">
              <div className="containerImagesTop">
                <div className="containerImg1" data-aos="fade-right">
                  <img src={driverPhoto3} alt="" />
                </div>
                <div className="containerImg2">
                  <img src={driverPhoto4} alt="Logo Tchossy" />
                </div>
              </div>
            </div>

            <div className="contentRight" data-aos="fade-up">
              <div className="containerTitleSection">
                <h4>Sobre a Empresa</h4>
                <h1>
                  Breves considerações <br /> sobre a KA
                </h1>
              </div>

              <p>
                Kandengue Atrevido (KA) é uma empresa jovem e inovadora que foi
                criada com o objetivo se oferecer serviços de transporte,
                especialmente no ramo de entregas. Com uma equipe de jovens
                empreendedores, a empresa busca trazer uma abordagem fresca e
                ousada para o sector.
              </p>
              <p>
                O diferencial da Kandengue Atrevido (KA) está na sua dedicação
                em prestar serviço de qualidade, rápido e eficiente. A empresa
                entende a importância de atender as demandas dos clientes de
                forma ágil, e garantir que as entras sejam feitas com segurança
                e qualidade.
              </p>
              <p>
                Com uma visão empreendedora e uma equipe dedicada, a Kandengue
                Atrevido (KA) tem conquistado cada vez mais clientes satisfeitos
                e se estabelecido como uma referencia no ramo da entrega. Se
                você procura um serviço de transporte agil, seguro e com um
                toque de ousadia, a Kandengue Atrevido é a escolha certa!
              </p>

              <ul>
                <li>
                  <BsCheck2Circle /> Transporte rápido, seguro e eficaz.
                </li>
                <li>
                  <BsCheck2Circle /> Serviço multifunctional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="countUp">
        <div className="containerContent">
          <div className="containerCountUpRow">
            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={NumClients}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>
                <span> +</span>
              </div>
              <h3>Cliente ativos</h3>
            </div>

            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={numProjects}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>
                <span>+</span>
              </div>
              <h3>Corridas</h3>
            </div>

            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={numYears}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>

                <span>+</span>
              </div>
              <h3>Anos Gloriosos</h3>
            </div>

            <div className="contentCountUp">
              <div className="numbers">
                <CountUp
                  start={0}
                  end={numExperts}
                  separator=" "
                  onEnd={() => console.log('Ended! 👏')}
                  onStart={() => console.log('Started! 💨')}
                  delay={4}
                >
                  {({ countUpRef, start }) => (
                    <span className="numberCountUp" ref={countUpRef} />
                  )}
                </CountUp>

                <span>+</span>
              </div>
              <h3>Motoqueiros Profissionais</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions">
        <div className="contentSolutions" data-aos="fade-right">
          {listSolutions}
        </div>
      </section>

      <section className="exploreUs">
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
          <div className="contentExploreUs">
            <div data-aos="fade-right">
              <h3>KANDENGUE te leva até onde desejares!</h3>
              <h1>Só precisas dizer para onde vais!</h1>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Kandengue'}
                onClick={() => null}
                // onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="containerContent">
          <div className="teamContainer">
            <h1 data-aos="fade-up">
              Conheça a nossa <strong>equipe</strong>
            </h1>

            <div className="containerRowMember">
              <div className="containerRowMemberTeamTop">
                <RenderMemberTeam
                  photo={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/463px-Blank_portrait%2C_male_%28rectangular%29.png'
                  }
                  name={'Geovani Nascimento'}
                  memberFunction={'Presidente do conselho administrativo'}
                />
              </div>
              <div className="containerRowMemberTeamTop">
                <RenderMemberTeam
                  photo={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/463px-Blank_portrait%2C_male_%28rectangular%29.png'
                  }
                  name={'Geovani Nascimento'}
                  memberFunction={'Administrador'}
                />
                <RenderMemberTeam
                  photo={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blank_portrait%2C_male_%28rectangular%29.png/463px-Blank_portrait%2C_male_%28rectangular%29.png'
                  }
                  name={'Geovani Nascimento'}
                  memberFunction={'Administrador'}
                />
              </div>
              <div className="containerRowMemberTeam" data-aos="fade-left">
                {listTeam}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerAbout>
  )
}

export default About
