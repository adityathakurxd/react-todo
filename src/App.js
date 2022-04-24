import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("")

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, currentTask])
    inputTask.current.value = "";
  }

  return (
    <div className="App">
    <h1>Todo List</h1>
    <input ref={inputTask} type="text" placeholder="Task..." onChange={(event) => {
      setCurrentTask(event.target.value);
    }}/>
    <button onClick={addTask}>Add Task</button>
    <hr></hr>
    <ul>
      {todoList.map((value,key) => {
        return (
          <li key={key}>{value}</li>
        )
      })}
    </ul>
    </div>
  );
}

export default App;
