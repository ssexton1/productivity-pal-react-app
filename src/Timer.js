import React from 'react'
import Timer from 'react-compound-timer'

function TimerComponent(props) {

    let timerLength = props.timerLength;

    return(
        <Timer
            initialTime={timerLength}
            direction="backward"
        >
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <div>
                        <Timer.Days /> days &nbsp;
                        <Timer.Hours /> hours &nbsp;
                        <Timer.Minutes /> minutes &nbsp;
                        <Timer.Seconds /> seconds
                    </div>
                    <div>{timerState}</div>
                    <br />
                    <div>
                        <button onClick={start}>Start</button>
                        <button onClick={pause}>Pause</button>
                        <button onClick={resume}>Resume</button>
                        <button onClick={stop}>Stop</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </React.Fragment>
            )}
        </Timer>
    );
}

export default TimerComponent;