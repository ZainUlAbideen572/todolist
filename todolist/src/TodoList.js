// TodoApp.js
import React, { useContext, useState } from 'react';
import { TodoContext } from './App';

function TodoList() {
  const Todo = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      Todo.tododispatch({ type: 'add todo', payload: { id: Date.now(), text: newTodo, completed: false } });
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    Todo.tododispatch({ type: 'remove todo', payload: id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {Todo.todostate.todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
