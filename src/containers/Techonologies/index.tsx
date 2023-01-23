import React, {useEffect} from 'react';
import './index.css';
import TechCard from '../../components/TechCard'
import PB from './../../assets/PB.svg'
import RN from './../../assets/RN.svg'
import RJ from './../../assets/RJ.svg'
import PY from './../../assets/PY.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { title } from 'process';


const technologies = [
  {name:'React.js',
  url: 'https://github.com/felipegerhardt/felipegerhardt',
  source: RJ,
  frameworks: ['','','','']},

  {name:'React Native',
  url: 'https://github.com/felipegerhardt/Learn.public',
  source: RN,
  frameworks:  ['','','','']},
 
  {name:'Python',
  url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot',
  source: PY,
  frameworks:  ['','','',''],},

  {name:'Power BI',
  url: 'https://github.com/felipegerhardt',
  source: PB,
  frameworks: ['','','',''] }]

const Techonologies = () => {
  
  useEffect (() => {

    Aos.init({duration: 1000})
    
  }, [])

  return (
    <div className="tech-container">
      <p data-aos="fade" className='section-header' id='Technologies'>Technologies</p>

      <div data-aos="fade" className="tech-card-group-container">

        {technologies.map((tech:any) => 
          <TechCard technology={tech.name} url={tech.url} source={tech.source} frameworks={tech.frameworks} />
        )}

      </div>

    </div>
  )
}

export default Techonologies