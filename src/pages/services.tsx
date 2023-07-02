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

function Services() {
  const docServices = [
    {
      _id: 'g56rbe685j68r67',
      imgUrl: 'images/services/service-4-1.jpg',
      name: 'SERVIÇOS DE ENTREGAS',
      role: 'Experimente nosso serviço de entregas e descubra a conveniência e agilidade que você merece, sem sair de casa!.'
    },
    {
      _id: 'efWEFRQ3GGRGshh',
      imgUrl: 'images/services/service-4-2.jpg',
      name: 'SERVIÇOS DE MOTO-TÁXI',
      role: 'Chegue rápido, com segurança e estilo! Experimente o nosso serviço de moto táxi e descubra uma nova maneira de se locomover pela cidade acompanhado do teu kandengue.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: 'images/services/service-4-3.jpg',
      name: 'SERVIÇO DE RELAÇÕES PÚBLICAS',
      role: 'Obtenha uma vantagem competitiva através da nossa capacidade de gerar cobertura mediática positiva para a sua empresa.'
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl: 'images/services/service-4-4.jpg',
      name: 'ALUGUEL DE MOTORIZADAS',
      role: 'Potencialize a mobilidade da sua empresa ou negócio com o nosso serviço de aluguel de motorizada, a escolha inteligente para deslocamentos eficientes e econômicos.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: 'images/services/service-4-3.jpg',
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
        backgroundImage="https://angfuzsoft.com/wordpress/taxseco/wp-content/uploads/2022/10/breadcumb-bg-4-1-3.jpg"
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
