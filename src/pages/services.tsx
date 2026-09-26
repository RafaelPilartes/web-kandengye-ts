import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import { services } from '../data/services'

import heroBg from '../assets/header/hero_bg_1.jpg'

function Services() {
  return (
    <div className="flex flex-col">
      <HeroSection
        backgroundImage={heroBg}
        title="Os nossos serviços"
        breadcrumb={['Serviços']}
      />

      <section className="container-page section-padding">
        <SectionHeading
          title="Do que precisa hoje?"
          description="Entregas, corridas, aluguer de motorizadas e apoio à sua marca. Tudo com a mesma equipa e o mesmo acompanhamento."
        />

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              imgUrl={service.imgUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
