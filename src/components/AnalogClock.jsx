import { useEffect, useState } from "react"
import './style.css'







function AnalogClock() {

    const [time, SetTime] = useState(new Date())
    useEffect(() =>{
        const timer = setInterval(() =>{
            SetTime(new Date())
        }, 1000)
        return () => clearInterval(time)
    }, [])

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const secondsHandleStyle = {
        transform: `rotate(${seconds * 6}deg)`
    }

    const minutesHandleStyle = {
        transform: `rotate(${minutes * 6 + (seconds *6) / 60}deg)`
    }

    const hoursHandleStyle = {
        transform: `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`
    }


    return (<>
     <h1>Analog Clock</h1>
    <div className="clock-container">

        <div className="clock">
            <div className="hand hour-hand" style={hoursHandleStyle}></div>
            <div className="hand minute-hand" style={minutesHandleStyle}></div>
            <div className="hand second-hand" style={secondsHandleStyle}></div>
       
        </div>
    </div>
    </>)
}

export default AnalogClock; 