import React, {useEffect} from 'react';
import './index.css';
import ProjectsCard from '../../components/ProjectsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../../public/L-earn_icon.png'

import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'swiper/css';

const projects = [
  {
    id: 1,
    name: 'Unlock',
    about: <>
      <p> Unlock is a NFT Marketplace being developed by me and my partner
      <br/>
      <br/> <p style={{fontWeight: 'bold'}}>Some details about the project:</p>
      <br/> • The marketplace will sell utility features for NFTs
      <br/> • Smart contracts were developed using Solidity
      <br/> • We use Polygon blockchain for the low fee gas
      <br/> • We are currently looking for angel investors</p></>,
    start: 'Apr/2022',
    url: 'https://www.figma.com/proto/Gi3d8w4V8tCzeSVRIbH52V/MVP?node-id=237%3A1280&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=237%3A1280&hide-ui=1',
    status: 'Development',
    img: image
  },

  {
    id: 2,
    name: 'L-earn',
    about: <>
      <p> L-earn is a gamified learning platform that connects tutors to students with goals and tutoring subjects well specified in an On Demand platform. The framework is React Native
      <br/>
      <br/> <p style={{fontWeight: 'bold'}}>What I have learned with this project:</p>
      <br/> • How to build a mobile app with Expo
      <br/> • React Native framework
      <br/> • Basic backend on Google Firebase</p></>,
    start: 'Aug/2021',
    url: 'https://github.com/felipegerhardt/Learn.public',
    status: 'Development',
    img: require('../../assets/Learn_Icon.png')
  }, 
  {
    id: 3,
    name: 'Kinematics of a space robot',
    about: <>
    <p> In this repo I analyzed the kinematics of a space robot under different gravity conditions using the Python libraries Sympy, Scipy, Numpy and Pydy.
    <br/>
    <br/> <p style={{fontWeight: 'bold'}}>What I have learned with this project:</p>
    <br/> • Using simulation and algebric libraries such as Sympy, SciPy and PyDy 
    <br/> • The main aspects of Object Oriented Programming
    <br/> • How to perform 3D dynamic simulations </p></>,
    start: 'Jan/2021',
    url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot',
    status: 'Concluded',
    img: require('../../assets/K_icon.svg')
  }
]

const Projects = () => {

  
  useEffect (() => {

    Aos.init({duration: 2000})
    
  }, [])

  return (
    <div className='containerProjects'>
      <p data-aos="fade" className='section__header' id='Projects'> Projects </p>
    

    <Swiper
      data-aos="fade"
      className='swiperContainer'
      spaceBetween={0}
      slidesPerView={1}
      /* onSlideChange={} */
      onSwiper={(swiper) => console.log(swiper)}
      >

      {projects.map((project) => 
        <SwiperSlide>
          <ProjectsCard 
            project={project.name}
            about={project.about}
            status={project.status}
            url={project.url} 
            img={project.img}/>
        </SwiperSlide>
        )
      }


    </Swiper>

    </div>
  )
}

export default Projects