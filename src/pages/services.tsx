import React, { createContext, useEffect, useState } from 'react'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Layout

// Styles
import {
  ContainerServices,
  ContainerListServices
} from '../styles/pages/ServicesStyles'

// Components
import HeroSection from '../components/HeroSection'
import RenderServices from '../components/RenderServices'

// Images
import heroBg4 from '../assets/header/hero_bg_1.jpg'
import driverBlack3 from '../assets/photos/driverBlack3.jpg'
import driverBlackAndRed3 from '../assets/photos/driverBlackAndRed3.jpg'
import driverRed3 from '../assets/photos/driverRed3.jpg'
import driverBlack4 from '../assets/photos/driverBlack4.jpg'
import motoRed from '../assets/photos/motoRed.png'

function Services() {
  const docServices = [
    {
      _id: 'g56rbe685j68r67',
      imgUrl: driverBlack3,
      name: 'SERVIÇOS DE ENTREGAS',
      role: 'Experimente nosso serviço de entregas e descubra a conveniência e agilidade que você merece, sem sair de casa!.'
    },
    {
      _id: 'efWEFRQ3GGRGshh',
      imgUrl: driverBlackAndRed3,
      name: 'SERVIÇOS DE MOTO-TÁXI',
      role: 'Chegue rápido, com segurança e estilo! Experimente o nosso serviço de moto táxi e descubra uma nova maneira de se locomover pela cidade acompanhado do teu kandengue.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: driverRed3,
      name: 'SERVIÇO DE RELAÇÕES PÚBLICAS',
      role: 'Obtenha uma vantagem competitiva através da nossa capacidade de gerar cobertura mediática positiva para a sua empresa.'
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl: motoRed,
      name: 'ALUGUEL DE MOTORIZADAS',
      role: 'Potencialize a mobilidade da sua empresa ou negócio com o nosso serviço de aluguel de motorizada, a escolha inteligente para deslocamentos eficientes e econômicos.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: driverBlack4,
      name: 'ECOMMERCE (JANELAS DE COMPRAS)',
      role: 'BREVEMENTE.'
    }
  ]
  const listarServices = docServices.map((item, index) => (
    <RenderServices key={index} services={item} />
  ))

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerServices>
      <HeroSection
        backgroundImage={heroBg4}
        title="Nossos Serviços"
        base1="Serviços"
      />

      <div className="container">
        <ContainerListServices>{listarServices}</ContainerListServices>
      </div>
    </ContainerServices>
  )
}

export default Services
