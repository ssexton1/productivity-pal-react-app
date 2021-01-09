import React from 'react'
import Timer from 'react-compound-timer'

function TimerComponent(props) {

    let timerLength = props.timerLength;

    return(
    //     <Timer
    //         initialTime={timerLength}
    //         direction="backward"
    //     >
    //         {({ start, resume, pause, stop, reset, timerState }) => (
    //             <React.Fragment>
    //                 <div>
    //                     <Timer.Days /> days &nbsp;
    //                     <Timer.Hours /> hours &nbsp;
    //                     <Timer.Minutes /> minutes &nbsp;
    //                     <Timer.Seconds /> seconds
    //                 </div>
    //                 <div>{timerState}</div>
    //                 <br />
    //                 <div>
    //                     <button className="btn btn-secondary ml-1" onClick={start}>Start</button>
    //                     <button className="btn btn-secondary ml-1" onClick={pause}>Pause</button>
    //                     <button className="btn btn-secondary ml-1" onClick={resume}>Resume</button>
    //                     <button className="btn btn-secondary ml-1" onClick={stop}>Stop</button>
    //                     <button className="btn btn-secondary ml-1" onClick={reset}>Reset</button>
    //                 </div>
    //             </React.Fragment>
    //         )}
    //     </Timer>
    // );
}

export default TimerComponent;