import React, { useRef, useState, useEffect } from "react";

function TimerComponent(props) {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");
	const [isPaused, setIsPaused] = useState(true);
	const [countdownLength, setCountdownLength] = useState(props.timerLength);

	let interval = useRef();

	const startTimer = () => {
		if (!isPaused) {
			interval.current = setInterval(() => {
				setCountdownLength((timeLeft) => timeLeft - 1000);
			}, 1000);
		}
	};

	function makeMeTwoDigits(n){
    	return (n < 10 ? "0" : "") + n;
	}

	function updateText(timerLength) {
		const days = Math.floor(timerLength / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timerLength / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((timerLength / 1000 / 60) % 60);
		const seconds = Math.floor((timerLength / 1000) % 60);

		if (timerLength < 0) {
			clearInterval(interval.current);
		} else {
			setTimerDays(makeMeTwoDigits(days));
			setTimerHours(makeMeTwoDigits(hours));
			setTimerMinutes(makeMeTwoDigits(minutes));
			setTimerSeconds(makeMeTwoDigits(seconds));
		}
	}
	
	useEffect(() => {
		updateText(countdownLength);
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

	const onStart = (event) => {
		setIsPaused(false);
	};

	const onStop = (event) => {
		setIsPaused(true);
	};

	const onReset = (event) => {
		setCountdownLength(props.timerLength);
		updateText(props.timerLength);
	};

	return (
		<p on>
			{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}
			<p></p>
			<button className="btn btn-secondary" onClick={onStart}>Start</button>
			<button className="btn btn-secondary ml-2 mr-2" onClick={onStop}>Stop</button>
			<button className="btn btn-secondary" onClick={onReset}>Reset</button>
		</p>
	);
}

export default TimerComponent;
