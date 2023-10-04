// App.js
import React, { useReducer } from "react";
// import Todolist from "./Todolist";
import TodoList from "./TodoList";

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'add todo':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'remove todo':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
}

export const TodoContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ todostate: state, tododispatch: dispatch }}>
      <div>
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
