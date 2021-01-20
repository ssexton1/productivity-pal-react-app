import TaskList from './Tasks'

function TaskTimerDecider( props ) {
    let onEdit = 'no-display';
    let onTasks = '';

    if (props.editTimer) {
        onEdit = '';
        onTasks = 'no-display';
    }

    const goBack = (event) => {
        props.editTimerCallback(false);
    }

    return (
        <div>

            <div className={onEdit}>
                <div onClick={goBack}>Go Back</div>
                {props.timerEditDiv}
            </div>

            <div className={onTasks}>
                <TaskList
                    tasks={props.tasks}
                    length={props.length}
                    editTimerCallback={props.editTimerCallback}
                    timerEditDivCallBack={props.timerEditDivCallBack}
                    addTaskCallback={props.addTaskCallback}
                    whatToDoWhenClicked={props.whatToDoWhenClicked}
                />
            </div>
            
        </div>
    )
}

export default TaskTimerDecider;