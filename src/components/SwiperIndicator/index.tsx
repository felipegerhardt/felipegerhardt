import React from 'react'
import './index.css'

import { useSwiper} from 'swiper/react'


const SwiperIndicator = ({
  projects,
  choice,
  setChoice
}:{
  projects: Array<object>;
  choice: number,
  setChoice: Function;
}) => {

  const swiper = useSwiper();

  function handleClick(number:number) {
    setChoice(number);
  }

  return (
    <div data-aos="fade" className='swiperIndicatorContainer'>
      <div className='swiperBox'>
        {projects.map((project:any) => 
          <div className='indicator' onClick={() => handleClick(project.number) }>
            <img className={ choice === project.number ? 'IndicatorActivated' : 'IndicatorDeactivated'} width={30} src={project.image}/>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default SwiperIndicator