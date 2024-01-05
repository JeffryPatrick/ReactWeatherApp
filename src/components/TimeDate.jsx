import React, { useRef } from "react";

const TimeDate = () => {

    const timeRef = useRef();
    const dateRef = useRef();

    const allDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    setInterval(() => {
        const date = new Date();
        timeRef.current.innerHTML = date.toLocaleTimeString();
        const today = (allDays[date.getDay()]) + ", " + (date.getDate()) + " " + (allMonths[date.getMonth()]) + " " + date.getFullYear()
        dateRef.current.innerHTML = today;
    }, 1000);

    return (
        <div className="time-date">
            <p className="time" ref={timeRef}></p>
            <p className='date' ref={dateRef}></p>
        </div>
    );
}

export default TimeDate;