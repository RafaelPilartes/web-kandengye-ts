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
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-01.jpg',
      title: 'Missão',
      description: 'Simplificar o complexo, desmistificar e gerar sempre valor',
      icon: <AiFillStar size={36} />
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-03.jpg',
      title: 'Visão',
      description:
        'Solucionar os problemas da sociedade com transparência, segurança e simplicidade',
      icon: <MdDesignServices size={36} />
    },
    {
      imgUrl:
        'https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/service1-02.jpg',
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

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerAbout>
      <HeroSection
        backgroundImage="https://angfuzsoft.com/wordpress/taxseco/wp-content/uploads/2022/10/breadcumb-bg-4-1-3.jpg"
        title="Sobre nós"
        base1="Sobre"
      />

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentLeft">
              <div className="containerImagesTop">
                <div className="containerImg1" data-aos="fade-right">
                  <img
                    src="https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/left-about-company-aboutUs.jpg"
                    alt=""
                  />
                </div>
                <div className="containerImg2">
                  <img
                    src="https://angfuzsoft.com/wordpress/taxseco/wp-content/uploads/2022/09/about_4_1-4.jpg"
                    alt="Logo Tchossy"
                  />
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
                Kandengue Atrevido (KA) é uma organização cirada totalmente por
                jovens estudantes que ambicionam atingir o sucesso no mundo dos
                negócios juntamente com a sua plataforma, é uma organização que
                visa automatizar a vida do pacato cidadão.
              </p>

              <ul>
                <li>
                  <BsCheck2Circle /> Continuamente a ligação total para frente
                </li>
                <li>
                  <BsCheck2Circle /> Aplicativo multifunctional
                </li>
                <li>
                  <BsCheck2Circle /> Funcionalidade confiável.
                </li>
                <li>
                  <BsCheck2Circle /> Aproveite a terceirização sinestésica
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
              <h3>KANGENGYE vai até onde desejares!</h3>
              <h1>Só precisas dizer para onde vais!</h1>
            </div>

            <div data-aos="fade-left">
              <ButtonSeeMore
                value={'Kandengye'}
                onClick={() => goTo(routsNameMain.home)}
                colorBase={defaultTheme.colors['base-white']}
                colorSecondary={defaultTheme.colors['brand-secondary']}
                textColor={defaultTheme.colors['base-text-bold']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="driver">
        <div className="containerContent">
          <div className="section1">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>Delivers</strong> & <strong>Moto-Táxi</strong>
              </h1>

              <div className="contentDescriptions">
                <p>
                  Empresa de Delivers e Moto-Táxi mais segura de Luanda. Faça a
                  sua corrida/entrega de forma: rápida, segura e ecónomica
                </p>

                <ul>
                  <li>
                    <BsFillCheckCircleFill />
                    <p>
                      <strong>Rápida:</strong>
                      <br />
                      Várias vezes mais rápido do que outros sistemas.
                    </p>
                  </li>
                  <li>
                    <BsFillCheckCircleFill />
                    <p>
                      <strong>Segura:</strong>
                      <br />
                      Higiene e cuidados dos das suas encomendas.
                    </p>
                  </li>
                  <li>
                    <BsFillCheckCircleFill />
                    <p>
                      <strong>Ecónomica:</strong>
                      <br /> Encomende com facilidade e economize muito mais.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <img
              data-aos="fade-up-left"
              src="https://thumbs.dreamstime.com/b/black-lady-receiving-parcel-courier-scanning-fingerprint-personal-verification-smart-payment-via-digital-tablet-224983338.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </ContainerAbout>
  )
}

export default About
