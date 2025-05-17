import { useState, useEffect } from "react"
import { format } from "date-fns"



function DigitalClock() {

const [time, settime] = useState(new Date())

useEffect(() => {
    const timer = setInterval(() =>{
        settime(new Date())
    },1000)

    return ()=> clearInterval(timer)
})


return(<>

    <h1>Digital Clock</h1>
    <h2>{time.toLocaleTimeString()}</h2>
    <h2>{format(time.toLocaleDateString(), 'dd-MM-yyyy') }</h2>
</>)

}
export default DigitalClock;