import React from 'react'
import './styles/Resume.css'

export default function Resume(props) {
  return (
    <div id='resume' className='resume' style={{
      backgroundColor: props.dark ? '#111111' : '#EAEAEA'
    }}>
      <div className="resume-container">
        <div className="resume-graph" style={{
          backgroundColor: props.dark ? '#0C0D0D' : '#DDEFDD',
          border: props.dark ? '1px solid #000000' : '1px solid #FFFFFF'
        }}>
          <div className="arrow">
            <div className="arrow-cover" style={{
              animation: props.time > 68 ? 'reveal-arrow 2s ease' : 'nulll 0s linear',
              backgroundColor: props.dark ? '#0C0D0D' : '#DDEFDD'
            }}></div>
            <img className='arrow-green' src="../../resume/arrow.png" alt="arrow"/>
            </div>
          <div className='graph-cont'>
            
          <div className="graph" style={{
             borderBottom: props.dark ? '1px solid #F4F0F0' : '1px solid #0D0D0D',
             borderLeft: props.dark ? '1px solid #F4F0F0' : '1px solid #0D0D0D'
          }}>
            
            <p style={{
              opacity: props.time > 58 ? '1' : '0',
              transition: 'opacity 1s ease',
              transitionDelay: '0s'
            }}>hard work</p>
            <p style={{
              opacity: props.time > 68 ? '1' : '0',
              transition: 'opacity 1s ease',
              transitionDelay: '500ms'
            }}>dedictation</p>
            <p style={{
              opacity: props.time > 68 ? '1' : '0',
              transition: 'opacity 1s ease',
              transitionDelay: '800ms'
            }}>sacrifices</p>
            <p style={{
              opacity: props.time > 68 ? '1' : '0',
              transition: 'opacity 1s ease',
              transitionDelay: '1s'
            }}>continuation</p>
            <p style={{
              opacity: props.time > 68 ? '1' : '0',
              transition: 'opacity 1s ease',
              transitionDelay: '1.4s'
            }}>always learning</p>
          </div>
          <h5 style={{
            color: props.dark ? '#F4F0F0' : '#0D0D0D'
          }}>Progress</h5>
          </div>
            
          
        </div>
        <div className="resume-data" style={{
          backgroundColor: props.dark ? '#0C0D0D' : '#DDEFDD',
          border: props.dark ? '1px solid #000000' : '1px solid #FFFFFF'
        }}>
        <div className="resume-det">
        <h5 style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Skills:</h5>
        <p style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Javascript, JQuery, CSS, HTML, Typescript, Frontend, MongoDB, API, React, NodeJS, UX/UI Design, Figma, Python, Blockchain</p>
        <h5 style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Experiences:</h5>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Built a decentralized web application that let people connect their crypto wallet and interact with the blockchain and smart contract (Flow Blockchain, NextJs, React, Javascript, CSS3, HTML5).</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Designed and coded a react app that is interactive and responsive with more than 50 types of devices (React, UX/UI Design, Javascript, CSS, HTML)k</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Built a customized verification bot system for <a href="https://some.place/" target="_blank" rel="noreferrer" style={{
          // textDecoration: 'none',
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>some.place</a> that receives users crypto wallets through an app (React, UX/UI Design) and send it to a custom API. It’s stored inside a database (MongoDB) and then the bot receives the data and uses it to interact with more than 3K users (Python).</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Built several responsive websites and webpages as a case study (Javascript, CSS, HTML).</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Wrote multiple working smart contracts and linked them to websites (Flow Blockchain, React, Javascript, CSS, HTML).</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Have experience coding email templates.</li></p>
        <h5 style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Education:</h5>
        <p style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Studied courses powered by Meta, Google, University of Washington and Freecodecamp including:</p>
        <ul>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Frontend <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/9XA2WMR577CY" target="_blank" rel="noreferrer" style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>(view certificate)</a></li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>UX Design</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Profesional English Ethics</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>React Native</li>
        </ul>
        </div>
        <div className='wrapper'>
        <div className='slider' style={{
          backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
        }}>
          <div className="slide-left" style={{
            backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
          }}></div>
          <div className="slide-right" style={{
            backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
          }}></div>
          <div className="slider-track" style={{
            backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
          }}>
          <div className="slide">
              <img src="../../resume/Google_Logo.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="../../resume/Meta-Logo.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="../../resume/University-of-Washington-Logo.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="../../resume/FreeCodeCamp_Logo.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="../../resume/Google_Logo.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="../../resume/Meta-Logo.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="../../resume/University-of-Washington-Logo.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="../../resume/FreeCodeCamp_Logo.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="../../resume/Google_Logo.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="../../resume/Meta-Logo.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="../../resume/University-of-Washington-Logo.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="../../resume/FreeCodeCamp_Logo.png" alt="Freecodecamp" />
            </div>
          </div>
        </div>
        </div>
        </div>
        
      </div>
      {/* Phone view */}
      <div className='slider-2' style={{
          backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
        }}>
          <div className="slide-left" style={{
            backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
          }}></div>
          <div className="slide-right" style={{
            backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
          }}></div>
          <div className="slider-track" style={{
            backgroundColor: props.dark ? '#0C0D0D' : '#EAEAEA'
          }}>
          <div className="slide">
              <img src="../../resume/Google_Logo.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="../../resume/Meta-Logo.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="../../resume/University-of-Washington-Logo.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="../../resume/FreeCodeCamp_Logo.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="../../resume/Google_Logo.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="../../resume/Meta-Logo.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="../../resume/University-of-Washington-Logo.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="../../resume/FreeCodeCamp_Logo.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="../../resume/Google_Logo.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="../../resume/Meta-Logo.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="../../resume/University-of-Washington-Logo.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="../../resume/FreeCodeCamp_Logo.png" alt="Freecodecamp" />
            </div>
          </div>
        </div>
    </div>
  )
}
