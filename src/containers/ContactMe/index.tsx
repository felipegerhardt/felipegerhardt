import React, {useState} from 'react';
import './index.css';
import {toast} from 'material-react-toastify';

import EmailJS from '../../utils';


const ContactMe = () => {

  const [params, setParams] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handlingCallback (params:any) {
    
    const from_name = params.name
    const from_email = params.email
    const message = params.message

    if (from_name === '' || from_email === '' || message === '' ) {
      toast.error('Information missing')
    } else {
      EmailJS(params)
    }
    

    
  }

  return (
    <div className="contact__container">
      <p className='section__header' id='ContactMe'>Contact me</p>
      <div className="textInput__container">
        <input className='textInput' type="text" placeholder='Name' required={true} value={params.name} 
          onChange={(e) => setParams({...params, name: e.target.value})}/>
        <input className='textInput' type="email" placeholder='Email' required={true} value={params.email} 
          onChange={(e) => setParams({...params, email: e.target.value})}/>
        <textarea className='textMessage' placeholder='Your message' required={true} value={params.message} 
          onChange={(e) => setParams({...params, message: e.target.value})}/>
        
        <div className='contact__buttons__container'>
          <button className='contact__buttons' onClick={() => handlingCallback(params)}> <p>Send</p> </button>
          <button className='contact__buttons' onClick={() => setParams({name: '', email: '', message:''})}> <p>Reset</p> </button>
        </div>
      
      </div>
      <div className='Footer__container'> 

      </div>
    </div>
  )
}

export default ContactMe