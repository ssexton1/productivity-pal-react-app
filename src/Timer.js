import React, { useRef, useState, useEffect } from 'react'

function TimerComponent(props) {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 30, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / 1000 / 60) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            if( distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current); 
        };
    })

    return(
        <div>
            <p>{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</p>
            {/* <button onClick={onStart}></button>
            <button onClick={onStop}></button> */}
        </div>
    );
}

export default TimerComponent;