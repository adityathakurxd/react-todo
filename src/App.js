import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("")

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, {task: currentTask, completed: false}])
    inputTask.current.value = "";
  }

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) => {
      return task.task !== taskToDelete
    }))
  }

  const completeTask = (taskToComplete) => {
    setTodoList(todoList.map((task) => {
      return task.task === taskToComplete ? {task: taskToComplete, completed: true} : {task: task.task, completed: task.completed ? true : false}
    }))
  }

  return (
    <div className="App">
    <h1>Todo List</h1>
    <input ref={inputTask} type="text" onKeyDown={(event)=>{if(event.keyCode === 13 ) addTask()}} placeholder="Task..." onChange={(event) => {
      setCurrentTask(event.target.value);
    }}/>
    <button onClick={addTask}>Add Task</button>
    <hr></hr>
    <ul>
      {todoList.map((value,key) => {
        return (
          <div id='task'>
            <li key={key}>{value.task}</li>
            <button onClick={() => completeTask(value.task)}>Completed</button>
            <button onClick={() => deleteTask(value.task)}>x</button>
            {value.completed ? (
              <h2>Task Completed</h2>
            ) : (
              <h2>Task Not Completed</h2>
            )}
          </div>
        )
      })}
    </ul>
    </div>
  );
}

export default App;
