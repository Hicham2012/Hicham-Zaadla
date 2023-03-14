import React from 'react' 
import './styles/Projects.css'
import Cards from './Cards'
import data from './Products.json'
 export default function Projects(props) {
 const [cardNum, setCardNum] = React.useState(1) 
 const projects = data.Projects[`${cardNum}` - 1].designSystem
  function handleChangeMax() {
    if(cardNum <= 6 && cardNum >= 1) {
    setCardNum(prevNum => prevNum + 1)
  } else {
    setCardNum(1)
  }
  }
  function handleChangeMin() {
    if(cardNum >= 2 && cardNum >= 1) {
    setCardNum(prevNum => prevNum - 1)
  } else{
    setCardNum(7)
  }
  }
  
//  console.log(data.Projects[`${cardNum}` - 1].designSystem.fonts["fonts-1"])
  // console.log(cardNum)
  return(
    <div id='projects' className='projects-all'>
      {/* Desktop & Ipad view */}
      <div className='projects-back' style={{
        animation: props.time >= 28 ? 'growbg 10s ease' : 'nulll 1s ease',
        backgroundColor: props.dark ? '#111111' : '#EAEAEA'
      }}>
        <div className='circle-gold' style={{
          animation: props.time >= 28 ? 'grow 3s ease' : 'nulll 1s ease'
        }}></div>
      {/* <div className='acheive' style={{
        background: 'red',
        width: cardNum === 1 ? '20%' : cardNum === 2 ? '40%' : cardNum === 3 ? '60%' : cardNum === 4 ? '80%' : '100%',
        height: '4px',
        position: 'absolute',
        top: '5%',
        left: '0%',
        transition: '1s ease'
        
      }}></div> */}
        <div className='left-side-des'>
        <div className='all-left'>
          <div className='des-fonts'>
            <h3 className='des-titles-fonts' style={{
              color: props.dark ? '#FFFFFF' : '#000000'
            }}>Fonts:</h3>
            <div className='fonts-col'>
            <fieldset>
                <legend>
                  <h5 style={{
                    fontFamily: `${projects.fonts["fonts-1"]}`
                }}>{projects.fonts["fonts-1"]}</h5>
                </legend>
                <p style={{
                  fontFamily: `${projects.fonts["fonts-1"]}`
                }}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            </fieldset>
            
          </div>
          </div>
          <div className="des-colors">
            <h3 className='des-titles-colors' style={{
              color: props.dark ? '#FFFFFF' : '#000000'
            }}>Color Palette:</h3>
            <div className='colors-col'>
              <div className='colors-col-in'>
              {projects.colors["color-1"] && <div>
                <div className='border-color'>
                  <div className='circles-color' style={{
                    background: `#${projects.colors["color-1"]}`
                  }}></div>
                </div>
                <h5 className='colors-name'>#{projects.colors["color-1"]}</h5>
                </div>}
              </div>
              <div className='colors-col-in'>
                {projects.colors["color-2"] && <div>
                  <div className='border-color'>
                    <div className='circles-color' style={{
                      background: `#${projects.colors["color-2"]}`
                    }}></div>
                  </div>
                  <h5 className='colors-name'>#{projects.colors["color-2"]}</h5>
                </div>}
              </div>
              <div className='colors-col-in'>
                {projects.colors["color-3"] && <div>
                  <div className='border-color'>
                    <div className='circles-color' style={{
                      background: `#${projects.colors["color-3"]}`
                    }}></div>
                  </div>
                  <h5 className='colors-name'>#{projects.colors["color-3"]}</h5>
                </div>}
              </div>
              <div className='colors-col-in'>
                  {projects.colors["color-4"] && <div>
                  <div className='border-color'>
                    <div className='circles-color' style={{
                      background: `#${projects.colors["color-4"]}`
                    }}></div>
                  </div>
                  <h5 className='colors-name'>#{projects.colors["color-4"]}</h5>
                </div>}
              </div>
          </div>
          </div>
          <div className="des-tech">
            <h3 className='des-titles-tech' style={{
              color: props.dark ? '#FFFFFF' : '#000000'
            }}>Technologies:</h3>
            <div className='tech-col'>
              <div className='part-1'>
          <h5 className='tech-col-in'>{projects.technologies["tech-1"]}</h5>
          <h5 className='tech-col-in'>{projects.technologies["tech-2"]}</h5>
          {projects.technologies["tech-3"] && <h5 className='tech-col-in'>{projects.technologies["tech-3"]}</h5>}
          </div>
          <div className="part-2">
          {projects.technologies["tech-4"] && <h5 className='tech-col-in'>{projects.technologies["tech-4"]}</h5>}
          {projects.technologies["tech-5"] && <h5 className='tech-col-in'>{projects.technologies["tech-5"]}</h5>}
          {projects.technologies["tech-6"] && <h5 className='tech-col-in'>{projects.technologies["tech-6"]}</h5>}
          </div>
          </div>
          </div>
          </div>
        </div>
        <div className="right-side-des">
          <div className='des-view'>
            <div className="des-titles-view" style={{
              color: props.dark ? '#FFFFFF' : '#000000'
            }}>Inside view:</div>
            <div className="des-view-col" style={{
              display: 'grid',
              gridTemplateColumns: projects.insideView["view-2"] ? '150px 150px' : 'auto',
              gridTemplateRows: projects.insideView["view-3"] ? '200px 200px 200px' : projects.insideView["view-2"] ? '200px 200px' : 'auto',
              gridTemplateAreas: projects.insideView["view-3"] ? "'view-one view-two' 'view-three view-four' 'view-five view-six'" :  projects.insideView["view-2"] ? "'view-one view-two' 'view-three view-four'" : "'view-one",
              overflowY: projects.insideView["view-3"] ? 'scroll' : 'hidden',
              scrollBehavior: 'smooth',
              overflowX: 'hidden',
            }}>
            {projects.insideView["view-1"] && projects.insideView["view-2"] && <div className='view-one' style={{
              backgroundImage: `url(${projects.insideView["view-1"]})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width:  'auto' ,
              height: 'auto',
              borderRadius: '10% 0% 0% 0%'
            }}></div>}
            {projects.insideView["view-1"] && !projects.insideView["view-2"] &&<div className="view-one-ex" style={{
              backgroundImage: `url(${projects.insideView["view-1"]})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '100%',
              width:  '300px',
              height: '400px',
              borderRadius: '9% 0% 0% 9%'
            }}></div>}
            {projects.insideView["view-2"] && <div className='view-two'></div>}
            {projects.insideView["view-3"] ? <div className='view-three'></div> : projects.insideView["view-2"] ? <div className='view-seven'></div> : null}
            {projects.insideView["view-2"] && <div className='view-four' style={{
              backgroundImage: `url(${projects.insideView["view-2"]})`,
              backgroundSize: 'cover'
            }}></div>}
            {projects.insideView["view-3"] && <div className='view-five' style={{
              background: `url(${projects.insideView["view-3"]})`,
              backgroundSize: 'cover'
            }}></div>}
            {projects.insideView["view-3"] && <div className='view-six'></div>}
            </div>
          </div>
        </div>
        
      </div>
      
      <div className='projects'  style={{
        backgroundColor: props.dark ? '#0C0D0D' : '#DDEFDD'
      }}>
        <div className='arrows' style={{
          animation: props.time >= 28 ? 'arrive 20s ease' : 'nulll 1s ease'
        }}>
      <button className='left' onClick={handleChangeMin} ></button>
        <button className='right' onClick={handleChangeMax} ></button>
        </div>
        <Cards cNum={cardNum} time={props.time}/>
        <div className='cadre-rec'></div>
      </div>

      {/* Phone view */}
      <div  className="project-phone">

        <div className="phone-cont-1" style={{
          backgroundImage: `url(${data.Projects[`${cardNum}` - 1].logo})`,
          backgroundColor: `#${data.Projects[`${cardNum}` - 1].colors}`,
          backgroundSize: '35%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
          <a href={data.Projects[`${cardNum}` - 1].link} target="_blank" rel='noreferrer' className="ph-visit">visit</a>
          
          {/* <div className='ph'>middle</div> */}
          <div onClick={handleChangeMin} className='ph-left'></div>
          <div onClick={handleChangeMax} className='ph-right'></div>
        </div>
        <div className="phone-cont-2">
          <div className="col-1">
            <div className='col-1-1'>
            <h5 className='ques'>Name:</h5>
            </div>
            <div className="col-1-2">
            <h5 className='answ'>{data.Projects[`${cardNum}` - 1].name}</h5>
            </div>
          </div>
          <div className="col-2">
            <div className='col-2-1'>
            <h5 className='ques'>Font:</h5>
            </div>
            <div className="col-2-2">
            <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.fonts["fonts-1"]}</h5>
            </div>
            <div className="col-2-3">
            <h5 className='answ-1' style={{
              fontFamily: `${data.Projects[`${cardNum}` - 1].designSystem.fonts["fonts-1"]}`
            }}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x y z</h5>
            </div>
          </div>
          <div className="col-3">
            <div className='col-3-1'>
            <h5 className='ques'>Color Palette:</h5>
            </div>
            <div className="col-3-2">
            <div className="crc-1">
              <div className="crc-in" style={{
                backgroundColor: `#${data.Projects[`${cardNum}` - 1].designSystem.colors["color-1"]}`
              }}></div>
              <h5 className='crc-name'>#{data.Projects[`${cardNum}` - 1].designSystem.colors["color-1"]}</h5>
            </div>
            <div className="crc-2">
            <div className="crc-in" style={{
                backgroundColor: `#${data.Projects[`${cardNum}` - 1].designSystem.colors["color-2"]}`
              }}></div>
              <h5 className='crc-name'>#{data.Projects[`${cardNum}` - 1].designSystem.colors["color-2"]}</h5>
            </div>
            <div className="crc-3">
            <div className="crc-in" style={{
                backgroundColor: `#${data.Projects[`${cardNum}` - 1].designSystem.colors["color-3"]}`
              }}></div>
              <h5 className='crc-name'>#{data.Projects[`${cardNum}` - 1].designSystem.colors["color-3"]}</h5>
            </div>
            </div>
          </div>
          <div className="col-4">
            <div className='col-4-1'>
            <h5 className='ques'>Technologies:</h5>
            </div>
            <div className="col-4-2">
              <div className="col-4-2-1">
            <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-1"]}</h5>
            <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-2"]}</h5>
            {data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-3"] && <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-3"]}</h5>}
            </div>
            <div className="col-4-2-2">
            {data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-4"] && <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-4"]}</h5>}
            {data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-5"] && <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-5"]}</h5>}
            {data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-6"] && <h5 className='answ'>{data.Projects[`${cardNum}` - 1].designSystem.technologies["tech-6"]}</h5>}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 }
