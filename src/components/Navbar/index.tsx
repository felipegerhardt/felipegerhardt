import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './index.css';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { useTransition, animated } from 'react-spring';

const links = ['About me', 'Technologies', 'Projects', 'Education'];

const Navbar = () => {

  const [dimensions, setDimensions] = useState({
    height: "",
    width: ""
  });

  useEffect(() => {
    setDimensions({
      height: window.innerHeight.toString(),
      width: window.innerWidth.toString()
    });

    function handleResize() {
      setDimensions({
        height: window.innerHeight.toString(),
        width: window.innerWidth.toString()
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);


  const [toggleMenu, setToggleMenu] = useState(false)
  const transition = useTransition(toggleMenu, {
    from: {x: 250, y: 60, opacity: 0, scale: 0.1},
    enter: {x: -20, y: 60, opacity: 1, scale: 1.1},
    leave: {x: 250, y: 60, opacity: 0, scale: 0.1},
  })
  
  const [navbar, setNavbar] = useState(false);
  var state = {
    display: true,
  };


  useEffect(() => {
    
    const changeBackground = () => {
      if ( window.scrollY >= 40 ) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [])
  
  return (

    <>
    
    <div className={ navbar ? "navbar-container active" : "navbar-container" }>
      <p className='FG'>FG</p>
      <div className="links">
        {links.map((myList, index) => <a href={`#${myList}`} className='ListButtons' key={index}>{myList}</a>)}
      </div>

      <div className='menu-container'>
        
        
        {toggleMenu  ?
          <RiCloseLine className='menu-icon' color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : 
          <RiMenu3Line className='menu-icon' color='#fff' size={27} onClick={() => setToggleMenu(true)}
          />
          }
        
          {transition((style, item) =>
            item && parseInt(dimensions.width) < 750  ? 
            
            <animated.div style={style} className='gpt3__navbar-menu_container' >
              <div className='gpt3__navbar-menu-container-links'>
                {links.map((myList, index) => <a href={`#${myList}`} className='ListButtons sm' key={index}  onClick={() => setToggleMenu(false)}>{myList}</a>)}
                <a onClick={() => setToggleMenu(false)} href='#ContactMe' className='ListButtons sm'>Contact me</a>
              </div>
            </animated.div> : null
            )}
      </div>
      <ToastContainer />
    </div>

    </>
    
  )
}

export default Navbar