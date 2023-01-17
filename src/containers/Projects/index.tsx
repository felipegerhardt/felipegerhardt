import React, {useEffect, useState} from 'react';
import './index.css';
import ProjectsCard from '../../components/ProjectsCard';

import Aos from 'aos'
import 'aos/dist/aos.css'; 

const projects = [
  { id: '0',
    name: 'Unlock',
    url: 'https://www.figma.com/proto/Gi3d8w4V8tCzeSVRIbH52V/MVP?node-id=237%3A1280&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=237%3A1280&hide-ui=1',
    status: 'Development',
    description: 'Unlock is a web application in Next.js and Tailwind framework. A smart contract written in Solidity programming language interacts with the Polygon blockchain to create and auction NFTs',
  },

  { id: '1',
    name: 'L-earn',
    start: 'Aug/2021',
    url: 'https://github.com/felipegerhardt/Learn.public',
    status: 'Development',
    description: 'Learn is mobile application in React Native framework. The application contain 10 pages and the authenthication and database interaction are in a Firebase Firestore storage',
  }, 
  { id: '2',
    name: 'Robotic arm kinematics',
    start: 'Jan/2021',
    url: 'https://github.com/felipegerhardt/kinematics-of-a-space-robot',
    status: 'Concluded',
    description: 'Kinematics of a space robot is a Python simulation with packages such as Numpy, Matplotlib, Simpy and Pydy',
  }
]

const Projects = () => {

  const [choice, setChoice] = useState(0);
  

  useEffect (() => {

    Aos.init({duration: 2000})
  }, [choice])


  return (
    <div className='projects-container'>
      <p data-aos="fade" className='section-header' id='Projects'> Projects </p>

      <div className='projects-card-container'> 

        {projects.map((project) => 
            <ProjectsCard 
              project={project.name}
              status={project.status}
              url={project.url}
              description={project.description}/>
          )
        }
      
      </div>



    </div>
  )
}

export default Projects