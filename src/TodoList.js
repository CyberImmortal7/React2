
import React, { useState } from 'react';
import './TodoList.css'


const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todoListBox">
      <h2 className="todoListTitle">Todo List</h2>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todoListInput"
        />
        <button onClick={addTodo} className="todoListAddTaskBtn">
          Add Task
        </button>
      </div>
      <ul className="todoList">
        {todos.map((todo, index) => (
          <li key={index} className="todoListItem">
            <button onClick={() => removeTodo(index)} className="todoListButton">
              X
            </button>
            {todo}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;