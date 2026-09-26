import driverBlack2 from '../assets/photos/driverBlack2.jpg'
import driverBlackAndRed2 from '../assets/photos/driverBlackAndRed2.jpg'
import driverRed2 from '../assets/photos/driverRed2.jpg'

export interface Solution {
  id: string
  imgUrl: string
  title: string
  description: string
}

export const solutions: Solution[] = [
  {
    id: 'mission',
    imgUrl: driverRed2,
    title: 'Missão',
    description:
      'Oferecer soluções logísticas eficientes aos nossos clientes, garantindo entregas rápidas e seguras, com o compromisso de ligar pessoas e negócios em toda a Angola.'
  },
  {
    id: 'vision',
    imgUrl: driverBlack2,
    title: 'Visão',
    description:
      'Ser reconhecida como empresa líder em soluções logísticas de entregas, superando as expectativas dos clientes com eficiência, fiabilidade e inovação, e contribuindo para o crescimento dos nossos parceiros de negócio.'
  },
  {
    id: 'values',
    imgUrl: driverBlackAndRed2,
    title: 'Valores',
    description:
      'Promover a humildade, semear o respeito, estimular a pontualidade e servir com qualidade.'
  }
]
