import React, {useEffect} from 'react';
import './index.css';
import TechCard from '../../components/TechCard'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles


const technologies = [
  {name:'React.js',
  id:'RJ',
  icon: '',
  url: 'https://github.com/felipegerhardt/felipegerhardt'},

  {name:'React Native',
  id:'RN',
  icon: '', 
  url: 'https://github.com/felipegerhardt/Learn.public'},
 
  {name:'Python',
  id: 'PY',
  icon: '',
  url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot'},
  {name:'Power BI',
  id: 'PB',
  icon: '',
  url: 'https://github.com/felipegerhardt'}]

const Techonologies = () => {
  
  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])

  return (
    <div className="tech__container">
      <p data-aos="fade" className='section__header' id='Technologies'>Technologies</p>

      <div data-aos="fade" className="cardContainer">

        {technologies.map((tech:any) => 
          <TechCard technology={tech.name} id={tech.id} url={tech.url}/>
        )}

      </div>

    </div>
  )
}

export default Techonologies