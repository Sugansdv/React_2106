import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  if (todos.length === 0) return <p className="text-muted">No tasks found.</p>;

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
