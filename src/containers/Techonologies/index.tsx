import React, {useEffect} from 'react';
import './index.css';
import TechCard from '../../components/TechCard'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles


const technologies = [
  {name:'React.js',
  id:'RJ',
  icon: '',
  text: '2 years studying React.js. Click on this card to judge my coding skills on this framework.', 
  url: 'https://github.com/felipegerhardt/felipegerhardt'},

  {name:'React Native',
  id:'RN',
  icon: '',
  text: '2 years studying React Native. I have an ongoing project that can be seen by clicking this card.', 
  url: 'https://github.com/felipegerhardt/Learn.public'},
 
  {name:'Python',
  id: 'PY',
  icon: '',
  text: '3 years studying Python. Click on this card to see a repo.', 
  url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot'},
  {name:'Power BI',
  id: 'PB',
  icon: '',
  text: '2 years of professional experience with Power BI data visualization', 
  url: 'https://github.com/felipegerhardt'}]

const Techonologies = () => {
  
  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])

  return (
    <div className="tech__container">
      <p data-aos="fade" className='section__header' id='Technologies'>Technologies</p>

      <div data-aos="fade-up" className="cardContainer">

        {technologies.map((tech:any) => 
          <TechCard tech={tech}/>
        )}

      </div>

    </div>
  )
}

export default Techonologies