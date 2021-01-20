import TaskTimerDecider from './TaskTimerDecider'
import { useState } from 'react'
import React from 'react'
//import { Route, Switch, Redirect } from 'react-router-dom';

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [editTimer, setEditTimer] = useState(false);
  const [timerEditDiv, setTimerEditDiv] = useState();

  const toggleTaskCompletion = (taskId) => {
    let updatedTaskArray = tasks.map((theTask) => {
      let taskCopy = {...theTask}
      if(taskCopy.id === taskId) {
        taskCopy.complete = !taskCopy.complete;
      }
      return taskCopy;
    })
    setTasks(updatedTaskArray);
  }

  const addTask = (taskDescription) => {
    let newTask = {
      id: tasks.length + 1,
      description: taskDescription,
      complete: false
    }

    let updatedTaskArray = tasks.map((theTask) => {
      let taskCopy = {...theTask};
      return taskCopy;
    })
    updatedTaskArray.push(newTask);

    setTasks(updatedTaskArray);
  }

  const timerSetPage = (timerItem) => {
    setEditTimer(timerItem);
  }

  const timerEditDivCallBack = (timerDiv) => {
    setTimerEditDiv(timerDiv);
  }

  let incompleteArray = tasks.filter((task) => !task.complete);


  return (
    <div className="container">
      <header> 
        <h1 className="pageTitle">Productivity Pal</h1>
      </header>

      
      <TaskTimerDecider 
        tasks={tasks}
        editTimer={editTimer}
        timerEditDiv={timerEditDiv}
        length={incompleteArray.length}
        editTimerCallback={timerSetPage}
        timerEditDivCallBack={timerEditDivCallBack}
        addTaskCallback={addTask}
        whatToDoWhenClicked={toggleTaskCompletion}
      />
      {/* <Switch>
        <Route exact path="/"> */}

        {/* </Route>
        <Route exact path="/editTimer" component={TimerSetPage} />
        <Redirect to="/" />
      </Switch> */}

      <footer>
        <address>
          Contact us at <a href="Email@Gmail.com">Email@Gmail.com</a>, or at <a href="tel:866-588-0569">Telephone Number</a>.
        </address>
        <p>&copy; 2020</p>
      </footer>
    </div>
  );

}

export default App;


// function App() {
//   return (
//     <div>
//       <header> 
//         <h1 className="pageTitle">Productivity Pal</h1>
//       </header>


//       <Tasks />
      // <Switch>
      //   <Route exact path="/" render={Map} />
      //   <Route exact path="/about" component={AboutPage} />
      //   <Route path="/report" component={Form} />
      //   <Route path="/map/:raceName"></Route>
      //   <Route exact path="/table" component={Table} />
      //   <Route exact path="/table/:personName" component={PersonProfile} />
      //   <Redirect to="/" />
      // </Switch>

//       <footer>
//         <address>
//           Contact us at <a href="Email@Gmail.com">Email@Gmail.com</a>, or at <a href="tel:866-588-0569">Telephone Number</a>.
//         </address>
//         <p>&copy; 2020</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
