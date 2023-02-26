import React from "react";
import './styles/Connect.css'

export default function Connect(props) {
  const [countfeed, setCountFeed] = React.useState(1)
  function countfeedmx() {
    if(countfeed <= 2) {
    setCountFeed(prevCountFeed => prevCountFeed + 1)
  } else {
    setCountFeed(1)
  }
  }
  function countfeedmin() {
    if(countfeed >= 2) {
    setCountFeed(prevCountFeed => prevCountFeed - 1)
  } else {
    setCountFeed(3)
  }
  }
  return (
    <div id="connect" className="connect" style={{
      backgroundColor: props.dark ? '#0C0D0D' : '#DDEFDD'
    }}>
      <div className="connect-info">
      <h5 style={{
        color : props.dark ? '#FFFFFF' : '#000000'
      }}>Let's Connect</h5>
      <p style={{
        color: props.dark ? '#F4F0F0' : '#0D0D0D'
      }}>If the vibe matches, we will build cool stuff</p>
      </div>
      <div className="connect-feedbacks">
      <img className="tree" src={props.dark ? "https://cdn.discordapp.com/attachments/941095160517894185/1068264836061995048/Vector_38.png" : "https://cdn.discordapp.com/attachments/941095160517894185/1069252515012554883/Vector_38.png"} alt="tree" />
        {/* Feed-1 */}
        <div className="feed-1" style={{
          backgroundColor: props.dark ? 'rgba(217, 217, 217, 0.1)' : 'rgba(63, 63, 63, 0.08)'
        }}>
          <div className="button" style={{
            border: props.dark ? '2px solid #0C0D0D' : '2px solid #DDEFDD'
          }}></div>
          <div className="inside-feed">
            <div className="photo-1"></div>
            <div className="writing-feed">
              <h5 style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Lana Hopkins</h5>
              <p style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Hich is the kind of guy every team needs. He is passionate, smart, kind, funny and is the true definition of a self made go-getter. No task is too large for Hich and we have been incredibly fortunate having him on our team. Hich is a team player, and an asset for any team.</p>
            </div>
          </div>
        </div>
         {/* Feed-2 */}
         <div className="feed-2" style={{
          backgroundColor: props.dark ? 'rgba(217, 217, 217, 0.1)' : 'rgba(63, 63, 63, 0.08)'
        }}>
          <div className="button" style={{
            border: props.dark ? '2px solid #0C0D0D' : '2px solid #DDEFDD'
          }}></div>
          <div className="inside-feed">
            <div className="photo-2"></div>
            <div className="writing-feed">
              <h5 style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Jenna C</h5>
              <p style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Hicham is a problem solver who will go the extra mile, even if it means quickly learning a new skill. He is dedicated to continually improving himself in a professional environment and is well above his peers in resourcefulness.</p>
            </div>
          </div>
        </div>
        {/* Feed-3 */}
        <div className="feed-3" style={{
          backgroundColor: props.dark ? 'rgba(217, 217, 217, 0.1)' : 'rgba(63, 63, 63, 0.08)'
        }}>
          <div className="button" style={{
            border: props.dark ? '2px solid #0C0D0D' : '2px solid #DDEFDD'
          }}></div>
          <div className="inside-feed">
            <div className="photo-3"></div>
            <div className="writing-feed">
              <h5 style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Juliana DiSimone</h5>
              <p style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>It’s been our absolute pleasure having you on this team. We’re lucky and better for that!</p>
            </div>
          </div>
        </div>
      
      </div>
      <div className="div-feed">
        {/* Feed-1 */}
        {countfeed === 1 && <div className="feed-1" style={{
          backgroundColor: props.dark ? 'rgba(217, 217, 217, 0.1)' : 'rgba(63, 63, 63, 0.08)'
        }}>
          <div className="button" style={{
            border: props.dark ? '2px solid #0C0D0D' : '2px solid #DDEFDD'
          }}></div>
          <div className="inside-feed">
            <div className="photo-1"></div>
            <div className="writing-feed">
              <h5 style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Lana Hopkins</h5>
              <p style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Hich is the kind of guy every team needs. He is passionate, smart, kind, funny and is the true definition of a self made go-getter. No task is too large for Hich and we have been incredibly fortunate having him on our team. Hich is a team player, and an asset for any team.</p>
            </div>
          </div>
        </div>}
         {/* Feed-2 */}
         {countfeed === 2 && <div className="feed-2" style={{
          backgroundColor: props.dark ? 'rgba(217, 217, 217, 0.1)' : 'rgba(63, 63, 63, 0.08)'
        }}>
          <div className="button" style={{
            border: props.dark ? '2px solid #0C0D0D' : '2px solid #DDEFDD'
          }}></div>
          <div className="inside-feed">
            <div className="photo-2"></div>
            <div className="writing-feed">
              <h5 style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Jenna C</h5>
              <p style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Hicham is a problem solver who will go the extra mile, even if it means quickly learning a new skill. He is dedicated to continually improving himself in a professional environment and is well above his peers in resourcefulness.</p>
            </div>
          </div>
        </div>}
        {/* Feed-3 */}
        {countfeed === 3 && <div className="feed-3" style={{
          backgroundColor: props.dark ? 'rgba(217, 217, 217, 0.1)' : 'rgba(63, 63, 63, 0.08)'
        }}>
          <div className="button" style={{
            border: props.dark ? '2px solid #0C0D0D' : '2px solid #DDEFDD'
          }}></div>
          <div className="inside-feed">
            <div className="photo-3"></div>
            <div className="writing-feed">
              <h5 style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>Juliana DiSimone</h5>
              <p style={{
                color: props.dark ? '#F3F1F1' : '#171717'
              }}>It’s been our absolute pleasure having you on this team. We’re lucky and better for that!</p>
            </div>
          </div>
        </div>}
      </div>
      <div onClick={countfeedmin} className="con-top-arrow"></div>
      <div onClick={countfeedmx} className="con-down-arrow"></div>
      <div className="bar" style={{
        backgroundColor: props.dark ? '#191B1B' : '#D8EAEA',
        borderShadow: props.dark ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(255, 255, 255, 0.25)'
      }}>
        <div className="flex-circle">
          <div className="circle-light" style={{
            transform: props.cursorPosition.x >= 420 ? 'translateX(270%) translateY(50%)' : 'translateX(120%) translateY(50%)',
            transition: 'all 700ms ease'
          }}></div>
          <div className="main-circle" style={{
            transform: props.cursorPosition.x >= 420 ? 'rotate(0deg)' : 'rotate(-180deg)',
            transition: 'transform 700ms ease'
          }}></div>
          <div className="circle-shadow" style={{
            transform: props.cursorPosition.x >= 420 ? 'translateX(-30%) translateY(-80%)' : 'translateX(30%) translateY(-80%)',
            transition: 'transform 500ms ease'
          }}></div>
        </div>
        <div className="cube-col">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=3xtox.Hicham@gmail.com" target="_blank" rel="noreferrer">
        <div className="cube-1" style={{
          animation: props.time > 88 ? 'cube-1-fall 1.5s linear' : 'nulll 0s linear'
        }}>
          <h5>G</h5>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/hicham-zaadla-835489251/" target="_blank" rel="noreferrer">
        <div className="cube-2" style={{
         animation: props.time > 88 ? 'cube-2-fall 600ms linear 1.05s' : 'nulll 0s linear'
        }}>
          <h5>in</h5>
        </div>
        </a>
        <a href="https://twitter.com/h_zaadla" target="_blank" rel="noreferrer">
        <div className="cube-3">
          <h5>T</h5>
        </div>
        </a>
        <a href="https://discord.com/users/868777243852304415" target="_blank" rel="noreferrer">
        <div className="cube-4" style={{
          animation: props.time > 88 ? 'cube-4-fall 1.5s linear' : 'nulll 0s linear'
        }}>
          <h5>D</h5>
        </div>
        </a>
        </div>
      </div>
      <p className="footer" style={{
        color: props.dark ? '#FFFFFF' : '#000000'
      }}>© 2023 Zaadla development. All rights reserved.</p>
    </div>
  )
}