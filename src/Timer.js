import React, { useRef, useState, useEffect } from 'react'
import TimerSetPage from './TimerSetPage'

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
                updateText(countdownLength);
                setCountdownLength(timeLeft => timeLeft - 1000);
            }, 1000);   
        }
    };

    function updateText(timerLength) {
        const days = Math.floor(timerLength / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timerLength / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timerLength / 1000 / 60) % 60);
        const seconds = Math.floor((timerLength / 1000) % 60);

        if(timerLength < 0) {
            clearInterval(interval.current);
        } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    }

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
        setCountdownLength(29000);
        updateText(30000);
    }

    return(
        <TimerSetPage 
            clock={<p>{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</p>} 
            start={<button onClick={onStart}>Start</button>} 
            stop={<button onClick={onStop}>Stop</button>} 
            reset={<button onClick={onReset}>Reset</button>}
        />
    );
}

export default TimerComponent;