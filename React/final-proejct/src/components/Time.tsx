import { useEffect, useState } from "react"

const Time: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return <div id="time-bar">
        <span id="time-bar-hour">{time.toTimeString().split(" ")[0]}</span>
    </div>
}

export default Time