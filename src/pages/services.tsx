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
      name: 'Serviços de entregas',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'efWEFRQ3GGRGshh',
      imgUrl: 'images/services/service-4-2.jpg',
      name: 'Serviços de Moto-Táxi',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: 'images/services/service-4-3.jpg',
      name: 'Serviço de relações públicas',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'f43gyh37h6jj6j',
      imgUrl: 'images/services/service-4-4.jpg',
      name: 'Aluguel de motorizadas',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
    },
    {
      _id: 'thw46h46hwthhyh',
      imgUrl: 'images/services/service-4-3.jpg',
      name: 'Ecommerce (Janelas de compras)',
      role: 'Produtize de forma convincente o e-business barato vis-à-vis os benefícios cooperativos. Manter esquemas de ponta globalmente e plagiar intrinsecamente.'
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
