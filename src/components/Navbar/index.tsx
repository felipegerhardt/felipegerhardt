import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './index.css';
import {ToastContainer} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';


// classnames are named as BEM (block element modifier) convention


const links = ['About me', 'Technologies', 'Projects', 'Experiences', 'Education']

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  
  const [navbar, setNavbar] = useState(false);


  useEffect(() => {
    
    const changeBackground = () => {
      if ( window.scrollY >= 20 ) {
        setNavbar(true);
        console.log(navbar);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [window.scrollY])
  
  return (

    <>
    
    <div className={ navbar ? "navbarcontainer active" : "navbarcontainer" }>
      <p className='FG'><a href='#About me'>FG</a></p>
      <div className="rightSideButtons">
        {links.map((myList, index) => <a href={`#${myList}`} className='ListButtons' key={index}>{myList}</a>)}
      </div>

      <div className='menu__container'>
        {toggleMenu ?
          <RiCloseLine className='menu__icon' color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : 
          <RiMenu3Line className='menu__icon' color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }

          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu-container-links'>
                {links.map((myList, index) => <a href={`#${myList}`} className='ListButtons' key={index}  onClick={() => setToggleMenu(false)}>{myList}</a>)}
                <a href='#ContactMe' className='ListButtons'>Contact me</a>
              </div>
            </div>
          )}
      </div>

      <button className='ContactMeButton'>
        <a className='ContentButton' href='#ContactMe'>Contact me</a>
      </button>
      <ToastContainer />
    </div>

    </>
    
  )
}

export default Navbar