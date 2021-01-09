import React, { useState } from 'react'
import TimerComponent from './Timer'

export function Task(props) {
    const theTask = props.task

    const [clickCount, setClickCount] = useState(0);

    let className = '';
    if(theTask.complete) {
        className = 'font-strike';
    }

    const handleClick = (event) => {
        console.log("you clicked on", theTask.description);
        setClickCount(clickCount + 1);
        props.howToHandleClick(theTask.id)
    }

    return (
        <li className={className} onClick={handleClick}>
            {theTask.description} {<TimerComponent timerLength={3000}/>}
        </li>
    );
}

export default function TaskList(props) {
    let taskComponents = props.tasks.map((eachTask) => {
        let singleTaskElem = (
            <Task 
                key={eachTask.id} 
                task={eachTask} 
                howToHandleClick={props.whatToDoWhenClicked} />
        )
        return singleTaskElem;
    })

    return(
        <ol>
            {taskComponents}
        </ol>
    );
}