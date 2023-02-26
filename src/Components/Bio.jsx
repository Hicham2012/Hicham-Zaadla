import React from 'react'
import './styles/Bio.css'
import face1 from './styles/Times pics/mask-nav/face.png'
import faceLight from './styles/Times pics/mask-nav/face-light.png'
// import face2 from './styles/Times pics/mask-nav/face2.png'
import eyeClose from './styles/Times pics/mask-nav/eye-closed.png'
import eyeCloseLight from './styles/Times pics/mask-nav/eye-closed-light.png'
import ring from './styles/Times pics/mask-nav/ring.png'
import eyeBall from './styles/Times pics/mask-nav/eye-ball.png'

export default function Bio(props) {
  
  
  
  
  return(
    <div className={`bio ${props.dark ? '' : 'bio-light'}`} id='bio'>
      <div className='bio-here'>
        <div className='face-combo' style={{
          opacity: props.time >= 23 ? '1' : '0',
            transform: props.time >= 23 ? 'translateX(0%)' : 'translateX(7%)',
            transition: 'all 700ms ease'
            
        }}>
          <img alt='ring' className='ring' src={ring} style={{
            top: props.time >= 23 && props.time <= 25 ? '-35%' : props.time >= 28 ?'195%' : '-35%' ,
            left: '29%',
            display: props.time >= 48 ? 'none' : 'flex',
            transition: 'all 700ms ease',
            animation: props.time >= 26 ? 'rotate-ring 1s infinite' : 'none'
          }}/>
          <img alt='eye-close' className='eye-close' src={props.dark ? eyeClose : eyeCloseLight}/>
          <img alt='eye-ball' className='eye-ball' src={eyeBall} style={{
            left: props.cursorPosition.x < 300 && props.cursorPosition.y > 300 ? '24%' : props.cursorPosition.x > 300 && props.cursorPosition.y >= 300 ? '26%' : '25.1%',
            // top: props.cursorPosition.x > 100 && props.cursorPosition.y >= 100 ? '41.5%' : '42.0%',
            top: '44.0%',
            transition: 'all 500ms ease'
          }}/>
          <img className='face' src={props.dark ? face1 : faceLight} alt="face" style={{
            // transform: 'skewX(5deg) rotate(-5deg)'
          }}/>
          {/* <img className='face2' src={face2} alt="face"/> */}
      </div>
      <div className="middle"></div>
      <div className="info-2" style={{
        opacity: props.time >= 23 ? '1' : '0',
        transform: props.time >= 23 ? 'translateX(0%)' : 'translateX(-7%)',
        transition: 'all 700ms ease'
      }}>
        <h3 className={`${props.dark ? 'title-dark' : 'title-light'}`}>WHO</h3>
        <p style={{
          color: props.dark ? 'rgba(244, 240, 240, 0.85)' : 'rgba(0, 0, 0, 0.85)'
        }}>I am Hicham Zaadla, a 21 year old coder who has been learning and building nearly every day for more than six months.
My dream is to build <span className='magic'>meaningful</span> things and work with people from around the globe.</p>
      </div>
      </div>
    </div>
  )
}