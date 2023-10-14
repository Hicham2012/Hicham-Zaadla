// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Times from './Components/Times'
import Portfolio from './Components/Portfolio';
import gsap from "gsap";

function App() {
    const [currentHour, setHours] = React.useState()
    const [ width, setWidth ] = React.useState()

    React.useEffect(() => {
        const date = new Date()
        const hours = date.getHours()
        setHours(hours)
            // console.log(currentHour)
    }, [currentHour])

    window.addEventListener("load", () => {
        gsap.set(".app", {autoAlpha: 1})
    })

    // Display websites depending on
    // the window's width size
    React.useEffect(() =>
    {
        window.addEventListener('resize', () =>
        {
            setWidth(window.innerWidth)
        })


        if(window.innerWidth >= 800)
            window.location.replace('https://3d-zaadla.vercel.app/');
    }, [width])

    return ( 
        <div className="app">
        { currentHour >= 8 && currentHour <= 19 ? < Portfolio / > : < Portfolio / > } { /* <Portfolio /> */ } 
         </div>
    );
}

export default App;
