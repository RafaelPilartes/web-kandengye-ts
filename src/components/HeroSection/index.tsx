import { IoIosArrowForward } from 'react-icons/io'

import { routsNameMain } from '../../../data/routsName'
import { HeroContainerStyles } from './styles'

interface IHeroSection {
  backgroundImage: string
  title?: string
  base1?: string
  base2?: string
  base3?: string
  base4?: string
}

function HeroSection({
  backgroundImage,
  title,
  base1,
  base2,
  base3,
  base4
}: IHeroSection) {
  return (
    <HeroContainerStyles backgroundImage={backgroundImage}>
      <div className="infoHero">
        <div className="path">
          <a href={routsNameMain.home as string}>Casa</a>
          {base1 && (
            <>
              <p>
                <IoIosArrowForward />
              </p>
              <p> {base1} </p>
            </>
          )}
          {base2 && (
            <>
              <p>
                <IoIosArrowForward />
              </p>
              <p> {base2} </p>
            </>
          )}
          {base3 && (
            <>
              <p>
                <IoIosArrowForward />
              </p>
              <p> {base3} </p>
            </>
          )}
          {base4 && (
            <>
              <p>
                <IoIosArrowForward />
              </p>
              <p> {base4} </p>
            </>
          )}
        </div>

        <h1 data-aos="zoom-in-up">{title}</h1>
      </div>
      <div className="shadow"></div>
    </HeroContainerStyles>
  )
}

export default HeroSection
