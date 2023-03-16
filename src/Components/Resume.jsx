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
            <img className='arrow-green' src="https://cdn.discordapp.com/attachments/941095160517894185/1068245262188937276/Line_57.png" alt="arrow"/>
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
        }}>Javascript, JQuery, CSS, HTML, Frontend, MongoDB, API, React, NodeJS, UX/UI Design, Python, Blockchain</p>
        <h5 style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Experiences:</h5>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Built a fully customized Discord bot for some.place, a Web3 company connecting brands and consumers through the blockchain. Developed the bot from the ground up using Python and API and launched it with multiple functionalities:</li></p>
        <ul>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Display latest sales in real time</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Manage help ticket system</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Directly interact wth members and offer them assistance</li>
        </ul>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Built a customized verification bot system for some.place that receives users crypto wallets through an app (React, UX/UI Design) and sends it to a custom API. It’s stored inside a database (MongoDB) and then the bot receives the data and uses it to interact with more than 3K users (Python).</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Built several websites after 5 months of self-paced courses (Javascript, CSS, HTML).</li></p>
        <p><li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Currently building a blockchain app to help improve people’s life (Fnow Blockchain, NextJS, React, Javascript ...)</li></p>
        <h5 style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Education:</h5>
        <p style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Studied courses powered by Meta, Google, University of Washington and Freecodecamp including:</p>
        <ul>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Frontend</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>UX Design</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Profesional English Ethics</li>
          <li className='re-li' style={{
          color: props.dark ? '#FFFFFF' : '#000000'
        }}>Product Management</li>
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
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176676011376750/Google_Logo_2015_-_640x217_2.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176957558226964/Meta-Logo_2.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177134314606672/University-of-Washington-logo_2.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177341811007539/512px-FreeCodeCamp_logo_2.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176676011376750/Google_Logo_2015_-_640x217_2.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176957558226964/Meta-Logo_2.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177134314606672/University-of-Washington-logo_2.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177341811007539/512px-FreeCodeCamp_logo_2.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176676011376750/Google_Logo_2015_-_640x217_2.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176957558226964/Meta-Logo_2.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177134314606672/University-of-Washington-logo_2.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177341811007539/512px-FreeCodeCamp_logo_2.png" alt="Freecodecamp" />
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
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176676011376750/Google_Logo_2015_-_640x217_2.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176957558226964/Meta-Logo_2.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177134314606672/University-of-Washington-logo_2.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177341811007539/512px-FreeCodeCamp_logo_2.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176676011376750/Google_Logo_2015_-_640x217_2.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176957558226964/Meta-Logo_2.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177134314606672/University-of-Washington-logo_2.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177341811007539/512px-FreeCodeCamp_logo_2.png" alt="Freecodecamp" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176676011376750/Google_Logo_2015_-_640x217_2.png" alt="Google" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068176957558226964/Meta-Logo_2.png" alt="Meta" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177134314606672/University-of-Washington-logo_2.png" alt="Washington University" />
            </div>
            <div className="slide">
              <img src="https://cdn.discordapp.com/attachments/941095160517894185/1068177341811007539/512px-FreeCodeCamp_logo_2.png" alt="Freecodecamp" />
            </div>
          </div>
        </div>
    </div>
  )
}
