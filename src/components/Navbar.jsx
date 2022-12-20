import React, { useState, useEffect } from 'react';
import ModelBg from '../styles/ModelBg';
import NavbarWrapper from '../styles/NavbarWrapper';
function Navbar(props) {
  const [show,setShow] = useState(false)
  const [transition,setTransition] = useState(false)
  useEffect(_ => {
    if (props.show) {
      setTimeout(_ => {
        setTransition(true)
      },8)
      setShow(true)
      return
    }
    setTransition(false)
    setTimeout(() => {
      setShow(false)
    }, 200);
  },[props.show])

  return (
    <NavbarWrapper className='navbar clickable' show={show} transition={transition} >
      <ModelBg className='navbar-bg' onClick={props.closeNav} />
      <div className='navbar-content'>
        <img id='close' src="images/icon-close.svg" alt="close icon" onClick={props.closeNav} />
        <ul>
        <li><a href='https://github.com/ogkkk'>Instagram</a></li>
        <li><a href="https://github.com/ogkkk">Github</a></li>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Don't Click</a></li>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;