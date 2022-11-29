import React, {useEffect, useState} from 'react';
import './index.css';
import ProjectsCard from '../../components/ProjectsCard';
import { Swiper, SwiperSlide,} from 'swiper/react'

import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'swiper/css';

const projects = [
  { id: '0',
    name: 'Unlock',
    url: 'https://www.figma.com/proto/Gi3d8w4V8tCzeSVRIbH52V/MVP?node-id=237%3A1280&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=237%3A1280&hide-ui=1',
    status: 'Development',
    image: require('../../assets/unlock_illustration.png'),
    technologies: ['Javascript', 'React.js', 'Next.js', 'Tailwind', 'Blockchain'],
    width: 400,
  },

  { id: '1',
    name: 'L-earn',
    start: 'Aug/2021',
    url: 'https://github.com/felipegerhardt/Learn.public',
    status: 'Development',
    image: require('../../assets/learn_illustration.png'),
    technologies: ['Javascript', 'React Native', 'React.js', 'Firebase API'],
    width: 400,
  }, 
  { id: '2',
    name: 'Kinematics of a space robot',
    start: 'Jan/2021',
    url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot',
    status: 'Concluded',
    image: require('../../assets/kosr.gif'),
    technologies: ['Python'],
    width: 250,
  }
]

const Projects = () => {

  const [choice, setChoice] = useState(0);
  

  useEffect (() => {

    Aos.init({duration: 2000})
  }, [choice])


  return (
    <div className='projects-container'>
      <p data-aos="fade" className='section__header' id='Projects'> Projects </p>
    

      <Swiper
        data-aos="fade"
        className='swiper-container'
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(a) => setChoice(a.activeIndex) }
        onSwiper={(swiper) => console.log(swiper)}
        >

        {projects.map((project) => 
          <SwiperSlide id={project.id}>
            <ProjectsCard 
              project={project.name}
              status={project.status}
              url={project.url}
              image={project.image}
              technologies={project.technologies}
              width={project.width}/>
          </SwiperSlide>
          )
        }


      </Swiper>

    </div>
  )
}

export default Projects