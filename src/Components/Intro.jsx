import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './styles/Intro.css'
// import Hi from './styles/Times pics/Frame 397.svg'
import CHAM from './styles/Times pics/CHAM.svg'
import CHAMLight from './styles/Times pics/CHAM-light.svg'
import ZAADLA from './styles/Times pics/ZAADLA.svg'

// import { Light } from 'three';
// import './Pull.js'
export default function Intro(props) {

    const [dark, setDark] = useState(true)
    

    props.func(dark)
    // const [title, setTitle] = useState(null)
    const containerRef = useRef(null);
    const boxRef = useRef(null);
    const isClicked = useRef(false);
    const coords = useRef({
        // startX: 0,
        startY: 0,
        // lastX: 0,
        lastY: 0
    });
    useEffect(() => {
        if (!boxRef.current || !containerRef.current)
            return;
        const box = boxRef.current;
        const container = containerRef.current;
        const onMouseDown = (e) => {
            isClicked.current = true;
            // coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };
        const onMouseUp = (e) => {
            isClicked.current = false;
            // coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };
        const onMouseMove = (e) => {
            if (!isClicked.current)
                return;
            // const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;
            box.style.top = `${nextY >= 5 ? 0 : nextY < 0 ? 0 : nextY}px`;
            // box.style.left = `${nextX}px`;
            
            if (box.style.top === '4px') {
              setDark(!dark)
            }
        };

        box.addEventListener('mousedown', onMouseDown);
        box.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);
        const cleanup = () => {
            box.removeEventListener('mousedown', onMouseDown);
            box.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        };
        return cleanup;
    }, [dark]);
    // console.log(`${props.cursorPosition.x},${props.cursorPosition.y}`)
   
 
  return (
    <div className={`intro ${dark ? '' : 'intro-light'}`} id='home'>
      <div className='logo' style={{
        animation: dark ? 'blurryl 1s ease-in' : 'blurryll 1s ease-in' 
      }}>
        
        <div className='one'>
        {/* <img className='hi' src={Hi} alt="Hi" /> */}
        <div className="hii">
          <div className="main">HI</div>
          <div className="stroke">HI</div>
        </div>
        </div>
        <div className='two'>
          <img className='zaadla' src={ZAADLA} alt="ZAADLA" />
        </div>
        <div className='three'>
          <img className='cham' src={dark ? CHAM : CHAMLight} alt="CHAM" />
          <div className='pull-container' ref={containerRef}>
            <div className="move" ref={boxRef}>
            <div className="pull"></div>
          </div>
          </div>
        </div>
      </div>
     <div className='down'></div>
    </div>
  )
}