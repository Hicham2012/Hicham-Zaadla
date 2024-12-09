import React from 'react'

import './styles/Portfolio.css'
import Intro from './Intro'
import Bio from './Bio'
import Projects from './Projects'
import Sidebar from './Sidebar'
import Resume from './Resume'
import Connect from './Connect'
import Note from './Note'


export default function Portfolio() {
  const [dark, setDark] = React.useState(true)
  const [cursorPosition, setCursorPosition] = React.useState({
    x: '',
    y: ''
  })
  React.useEffect((e) => {
    const handleChnage = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleChnage)
    return () => {
      window.removeEventListener('mousemove', handleChnage)
    }
  }, [cursorPosition])
  const pull_data = (data) => {
    setDark(data)
  }
const [scrollPosition, setScrollPosition] = React.useState(0);
const handleScroll = () => {
    const position = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    setScrollPosition(position);
};

React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollPosition]);
// console.log(scrollPosition)
  function Guide() {
    return (
      <>
        <p className='guide-in' style={{
          position: 'fixed',
          top: '9px',
          right: '0%',
          zIndex: '999'
          // animation: scrollPosition === 0 ? 'wow 700ms initial' : scrollPosition === 24 ? 'wow 700ms ease inherite' : scrollPosition === 49 ? 'wow 700ms ease inherite' : scrollPosition === 72 ? 'wow 700ms ease inherite' : 'wow 700ms ease inherite'
        }}>{scrollPosition >= 0 && scrollPosition < 24 ? 'Home' : scrollPosition >= 24 && scrollPosition < 49 ? 'Bio' : scrollPosition >= 49 && scrollPosition < 72 ? 'Projects' : scrollPosition >= 72 && scrollPosition < 95 ? 'Resume' : 'Connect'}</p>
      </>
    )
  }
  function Rotate() {
    return (
      <div className="rotate" style={{
        width: '100%',
        height: '100%'
      }}>
        <p>Please rotate for a better experience</p>
      </div>
    )
  }
  return (
   
    <div className='portfolio'>
      <Sidebar  dark={dark}/>
      <Guide />
      <Note />
      <Rotate />
      <header>
      <Intro 
        func={pull_data}
        cursorPosition={cursorPosition}
      />

      </header>
      <main>
      <Bio 
        dark={dark}
        time={scrollPosition} 
        cursorPosition={cursorPosition}/>
      <Projects 
        time={scrollPosition} 
        dark={dark}
      />
      <Resume 
        time={scrollPosition}
        dark={dark}
      />
      <Connect 
        cursorPosition={cursorPosition}
        time={scrollPosition}
        dark={dark}
      />
      </main>
    </div>

  )
}
