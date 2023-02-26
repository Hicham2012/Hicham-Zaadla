import React from 'react'
import './styles/Cards.css'
import data from './Products.json'

export default function Cards(props) {
  // console.log(props.time)
  const projects = data.Projects
  const info = projects.map((x) => (
    // props.cNum
    <div key={x.id} className={`card-container-${props.cNum}`} style={{
      background: `url(${x.logo}) #${x.colors}`,
      backgroundSize: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // animation: props.time >= 28 ? 'arrive-2 3s ease' : 'nulll 0s ease'
    }}>
      <h3 className='proj-title'>{x.name}</h3>
      <div className='proj-describtion'>
        <p>{x.describtion}</p>
        <div className='aa'>
        <a href={x.link} rel='noreferrer' target='_blank'>-click to visit-</a>
        <span className='a-back'></span>
        </div>
      </div>
    </div>
   
  ))
  return (
    <>
      {info}
    </>
  )
}