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

function Privacy() {
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
      <HeroSection
        backgroundImage={heroBg4}
        title="Privacy Policy"
        base1="Policy"
      />

      <section className="aboutUs">
        <div className="containerContent">
          <div className="containerAboutUs">
            <div className="contentRight" data-aos="fade-up">
              <div className="containerTitleSection">
                <h4>Privacy Policy — Kandengue Atrevido</h4>
                <h1>Privacy Policy</h1>
                <p>Last Update: November 14, 2025</p>
              </div>

              <p>
                Kandengue Atrevido (“we”, “our”, “us”) is committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, store, and share your data when you use our mobile
                application or any related services.
              </p>

              <p>
                By using our services, you agree to the terms described in this
                Privacy Policy.
              </p>

              <h2>1. Information We Collect</h2>

              <h3>1.1. Information Collected Automatically</h3>
              <p>When you use our app, we automatically collect:</p>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Device information (model, OS, unique identifiers, app
                  version)
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  IP address and network information
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Location data (GPS, Wi-Fi, cellular), even in background when
                  required
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Usage information such as screens visited and interaction logs
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Crash logs and diagnostics (e.g., via Firebase Crashlytics)
                </li>
              </ul>

              <h3>1.2. Information You Provide</h3>
              <ul>
                <li style={{ maxWidth: '29rem' }}>Full name</li>
                <br />
                <li style={{ maxWidth: '29rem' }}>Phone number</li>
                <br />
                <li style={{ maxWidth: '29rem' }}>Email address</li>
                <br />
                <li style={{ maxWidth: '29rem' }}>Profile information</li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Payment information (when applicable)
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Delivery or ride details (pickup, dropoff, route, time)
                </li>
              </ul>

              <h3>1.3. Transaction and Ride Information</h3>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Pickup and dropoff addresses
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Trip route, timestamp, and duration
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Driver and user identifiers
                </li>
                <br />
                <li style={{ maxWidth: '29rem' }}>Payment details</li>
                <br />
                <li style={{ maxWidth: '29rem' }}>
                  Background location data for:
                  <ul>
                    <li style={{ maxWidth: '29rem' }}>Ride tracking</li>
                    <br />
                    <li style={{ maxWidth: '29rem' }}>Driver navigation</li>
                    <br />
                    <li style={{ maxWidth: '29rem' }}>
                      Safety and fraud prevention
                    </li>
                    <br />
                    <li style={{ maxWidth: '29rem' }}>
                      Real-time customer updates
                    </li>
                  </ul>
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>

              <h3>2.1. Service Delivery</h3>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Create and manage accounts
                </li>
                <li style={{ maxWidth: '29rem' }}>Match users with drivers</li>
                <li style={{ maxWidth: '29rem' }}>
                  Provide navigation and geolocation services
                </li>
                <li style={{ maxWidth: '29rem' }}>
                  Process payments and confirmations
                </li>
              </ul>

              <h3>2.2. App Improvement</h3>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Optimize performance and user experience
                </li>
                <li style={{ maxWidth: '29rem' }}>Understand usage patterns</li>
                <li style={{ maxWidth: '29rem' }}>Improve routing accuracy</li>
              </ul>

              <h3>2.3. Communication</h3>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Send notifications about rides or deliveries
                </li>
                <li style={{ maxWidth: '29rem' }}>Provide support responses</li>
                <li style={{ maxWidth: '29rem' }}>Send security alerts</li>
              </ul>

              <h3>2.4. Legal and Security</h3>
              <ul>
                <li style={{ maxWidth: '29rem' }}>Detect fraud or misuse</li>
                <li style={{ maxWidth: '29rem' }}>
                  Comply with legal obligations
                </li>
                <li style={{ maxWidth: '29rem' }}>
                  Protect the safety of users and drivers
                </li>
              </ul>

              <h2>3. Information Sharing</h2>

              <h3>3.1. Service Providers</h3>
              <p>We may share your information with partners such as:</p>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Firebase (Auth, Firestore, Crashlytics)
                </li>
                <li style={{ maxWidth: '29rem' }}>
                  Google Maps and related services
                </li>
                <li style={{ maxWidth: '29rem' }}>Payment processors</li>
                <li style={{ maxWidth: '29rem' }}>Analytics tools</li>
              </ul>

              <h3>3.2. Legal Compliance</h3>
              <p>
                We may share data when required to comply with laws, respond to
                legal requests, or protect our rights or public safety.
              </p>

              <p>
                <strong>We do not sell personal information.</strong>
              </p>

              <h2>4. Privacy Rights — GDPR (EU/EEA)</h2>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Access, correction, deletion
                </li>
                <li style={{ maxWidth: '29rem' }}>Objection to processing</li>
                <li style={{ maxWidth: '29rem' }}>Data portability</li>
                <li style={{ maxWidth: '29rem' }}>Withdrawal of consent</li>
              </ul>

              <h2>5. Privacy Rights — LGPD (Brazil)</h2>
              <ul>
                <li style={{ maxWidth: '29rem' }}>
                  Confirmation of data processing
                </li>
                <li style={{ maxWidth: '29rem' }}>Access and correction</li>
                <li style={{ maxWidth: '29rem' }}>Anonymization or deletion</li>
                <li style={{ maxWidth: '29rem' }}>Portability</li>
                <li style={{ maxWidth: '29rem' }}>Information about sharing</li>
                <li style={{ maxWidth: '29rem' }}>Withdrawal of consent</li>
              </ul>

              <h2>6. Data Storage and Security</h2>
              <p>
                We implement strong technical and organizational measures to
                keep your data safe. Data may be stored in secure systems such
                as Firebase, compliant with GDPR and ISO/IEC 27001.
              </p>

              <h2>7. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect legal changes or
                improvements in our services. Updates will be published within
                the app or our website.
              </p>

              <h2>8. Contact</h2>
              <p>
                📧 <strong>support@kandengueatrevido.com</strong>
              </p>
              <p>📍 Kandengue Atrevido — Customer Support, Luanda, Angola</p>
              <p>
                If you wish to request access, correction, or deletion of your
                data, please include your request in the message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContainerAbout>
  )
}

export default Privacy
