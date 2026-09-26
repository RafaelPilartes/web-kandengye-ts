import driverBlack3 from '../assets/photos/driverBlack3.jpg'
import driverBlack4 from '../assets/photos/driverBlack4.jpg'
import driverBlackAndRed3 from '../assets/photos/driverBlackAndRed3.jpg'
import driverRed3 from '../assets/photos/driverRed3.jpg'
// O PNG original tinha 2,1 MB e ficava nos 843 kB mesmo depois de
// optimizado — e um recorte com transparencia, que o PNG comprime mal.
// Em WebP, com alfa na mesma, sao 127 kB.
import motoRed from '../assets/photos/motoRed.webp'

export interface Service {
  id: string
  imgUrl: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'deliveries',
    imgUrl: driverBlack3,
    title: 'Serviços de entregas',
    description:
      'Experimente o nosso serviço de entregas e descubra a conveniência e a agilidade que merece, sem sair de casa.'
  },
  {
    id: 'moto-taxi',
    imgUrl: driverBlackAndRed3,
    title: 'Serviços de moto-táxi',
    description:
      'Chegue rápido, com segurança e estilo. Descubra uma nova maneira de se deslocar pela cidade acompanhado do seu kandengue.'
  },
  {
    id: 'public-relations',
    imgUrl: driverRed3,
    title: 'Serviço de relações públicas',
    description:
      'Ganhe vantagem competitiva com a nossa capacidade de gerar cobertura mediática positiva para a sua empresa.'
  },
  {
    id: 'motorcycle-rental',
    imgUrl: motoRed,
    title: 'Aluguer de motorizadas',
    description:
      'Potencie a mobilidade da sua empresa com o nosso serviço de aluguer de motorizadas — a escolha inteligente para deslocações eficientes e económicas.'
  },
  {
    // Antes este partilhava o `_id` com o serviço de relações públicas.
    id: 'ecommerce',
    imgUrl: driverBlack4,
    title: 'E-commerce (janelas de compras)',
    description: 'Brevemente.'
  }
]
