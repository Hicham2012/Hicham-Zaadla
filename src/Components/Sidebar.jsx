import React from 'react'
import './styles/Sidebar.css'
import { Link } from 'react-scroll'

export default function Sidebar(props) {
  const [clicked, setClicked]  = React.useState(false)
  
  
  function handleChange() {
    setClicked(!clicked)
    // console.log(clicked)
  }
  
  // console.log(props.dark)
  // function scrollToTop() {
  //   scroll.scrollToTop();
  // }
  return (
    <>
    <div className="side" onClick={handleChange}>
      <div className="side-1" style={{
       transform: clicked ? 'rotate(40deg)' : 'rotate(0deg)',
       transition: 'transform 50ms ease',
       backgroundColor: 'white'
      }}></div>
      <div className="side-2" style={{
        marginTop: clicked ? '-4px' : '7px',
        transform: clicked ? 'rotate(140deg)' : 'rotate(0deg)',
        transition: 'transform 50ms ease',
        backgroundColor: 'white'

        
      }}></div>
    </div>
    <div className='navbar' style={{
      transform: clicked ? 'translateX(0%)' : 'translateX(-100%)',
      // animation: clicked ? 'mask-nav 1s steps(7) forwards' :'mask-nav-rev 1s steps(7) forwards',
      transition: 'transform 200ms ease-in',
    }}>
      <ul>
      <li>
      <li>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className='fromLeft'
          onClick={handleChange}
        >Home</Link>
      </li>
 
      </li>
      <li>
      <Link
          activeClass='active'
          to='bio'
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className='fromLeft'
          onClick={handleChange}
        >Bio</Link>
      </li>
      <li>
      <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className='fromLeft'
          onClick={handleChange}
        >Projects</Link>
      </li>
      <li>
      <Link
          activeClass='active'
          to='resume'
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className='fromLeft'
          onClick={handleChange}
        >Resume</Link>
      </li>
      <li>
      <Link
          activeClass='active'
          to='connect'
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className='fromLeft'
          onClick={handleChange}
        >Connect</Link>
      </li>
      </ul>
    </div>
    {clicked && <div className="shadow" onClick={handleChange}></div>}
    </>
  )
}