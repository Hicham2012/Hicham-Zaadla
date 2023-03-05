// import logo from './logo.svg';
import React from 'react'
import './App.css';
// import Times from './Components/Times'
import Portfolio from './Components/Portfolio';

function App() {
    const [currentHour, setHours] = React.useState()

    React.useEffect(() => {
        const date = new Date()
        const hours = date.getHours()
        setHours(hours)
            // console.log(currentHour)
    }, [currentHour])

    return ( 
        <>
//         { currentHour >= 8 && currentHour <= 19 ? < Portfolio / > : < Times / > }
           <Portfolio /> 
        </>
    );
}

export default App;
