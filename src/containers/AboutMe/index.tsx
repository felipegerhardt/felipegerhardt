import { useEffect } from 'react';
import './index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


import MovingComponent from 'react-moving-text';


import Aos from 'aos'
import 'aos/dist/aos.css';

const AboutMe = () =>  {
  

  useEffect (() => {

    Aos.init({duration: 2000})
    
  }, [])

  
  return (
    <div className="about_me__container">
      <div className="name__social__media">
        <p id='About me' className='name'>FELIPE GERHARDT</p>
        
          <div className='social__media__container'>
            <button className='icons__button'><FaGithub size={25} color='white' className='social__media' onClick={() => window.open('https://github.com/felipegerhardt/')}/></button>
            <button className='icons__button'><FaLinkedin size={25} color='white' className='social__media' onClick={() => window.open('https://www.linkedin.com/in/felipelcgerhardt/')}/></button>
          </div>
      </div>
      <div className="welcome__container">
        
        <p className='welcome'>Welcome to my profile</p>

        <p className='text'>
          I am a Brazilian software developer here in Canada.
        </p>
        <p className='text'>
          My interest in programming started in 2018, when I wanted to understand how to perform AI predictions. 
          I learned Python in the next year then I realized that I needed to create a platform to apply what I have learned.
          After almost 1 year struggling with Kivy/KivyMD framework, I finally switched to React Native.
          Nowadays I'm focusing my career on front-end React.js and React Native based applications. 
        </p>

        <div className="dynamic-text-container">
          <p className='text'>
            Some things about me: 
          </p>

          <div className='ILove'>
            <p>I love</p>
          
          
            <MovingComponent type="typewriter"
                dataText={[
                'programming',
                'learning',
                'being useful',
                'technology',
                'playing chess',
                'playing guitar',
              ]} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AboutMe