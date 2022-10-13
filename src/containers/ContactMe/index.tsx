import React, { useState } from 'react';
import './index.css';
import { toast } from 'material-react-toastify';
import { Blocks } from 'react-loader-spinner';
import { BiMailSend } from 'react-icons/bi';
import { AiOutlineRedo } from 'react-icons/ai';

import EmailJS from '../../utils';


const ContactMe = () => {

  const [sending, setSending] = useState(false);

  const [params, setParams] = useState({
    name: '',
    email: '',
    message: '',
    sendingState: setSending,
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
          
          <button className='contact__buttons' onClick={() => handlingCallback(params)}>
            
            {sending ? 
            
            <Blocks
              visible={true}
              height="25"
              width="25"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
            />

            : 
            <BiMailSend color='white' className='button-icon' size={23}/>
            } 
            <p>Send</p> 

          </button>
          
          <div className='contact__buttons' 
            onClick={() => setParams({name: '', email: '', message:'', sendingState:setSending})}>
            
            <AiOutlineRedo color='white' className='button-icon reset' size={23}/>

            <p>Reset</p> 
          </div>

        </div>
      
      </div>
      <div className='Footer__container'> 

      </div>
    </div>
  )
}

export default ContactMe