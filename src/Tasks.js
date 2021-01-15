import React, { useState } from 'react'
import TimerComponent from './Timer'
import { AddTaskForm } from './TaskForms'

export function Task(props) {
    const theTask = props.task

    const [clickCount, setClickCount] = useState(0);

    let className = '';
    if(theTask.complete) {
        className = 'font-strike';
    }

    const handleClick = (event) => {
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
        <div>
            <p className="lead">
                Num things I have to do: <strong>{props.length}</strong>
            </p>
            <ol>
                {taskComponents}
            </ol>

            <AddTaskForm addTaskCallback={props.addTaskCallback}/>

        </div>
    );
}