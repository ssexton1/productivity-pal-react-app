import React, { useRef, useState, useEffect } from 'react'

function TimerComponent(props) {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [isPaused, setIsPaused] = useState(true);
    const [countdownLength, setCountdownLength] = useState(30000)

    let interval = useRef();

    const startTimer = () => {
        if (!isPaused) {
            interval.current = setInterval(() => {

                const days = Math.floor(countdownLength / (1000 * 60 * 60 * 24));
                const hours = Math.floor((countdownLength / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((countdownLength / 1000 / 60) % 60);
                const seconds = Math.floor((countdownLength / 1000) % 60);
    
                if(countdownLength < 0) {
                    clearInterval(interval.current);
                } else {
                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(minutes);
                    setTimerSeconds(seconds);
                }
                setCountdownLength(timeLeft => timeLeft - 1000);

            }, 1000);   
        }
    };

    // useEffect(() => {
    //     if (isPaused) {
    //         clearInterval(interval.current);
    //     } else {
    //         startTimer();
    //         return () => {
    //             clearInterval(interval.current);
    //         };
    //     }
    // });

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });


    const onStart = (event) => {
        setIsPaused(false);
    }
    
    const onStop = (event) => {
        setIsPaused(true);
    }

    const onReset = (event) => {
        setCountdownLength(30000);
    }

    return(
        <div>
            <p>{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</p>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default TimerComponent;