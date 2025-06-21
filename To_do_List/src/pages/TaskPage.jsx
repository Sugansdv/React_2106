import React, { useState, useEffect } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function TaskPage() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos
    .filter(todo => {
      if (filter === "Completed") return todo.completed;
      if (filter === "Active") return !todo.completed;
      return true;
    })
    .filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container py-5">
      <div className="card shadow-lg mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4 text-primary">📝 Task Manager</h3>

          <TodoInput todos={todos} setTodos={setTodos} />

          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="btn-group">
              {["All", "Active", "Completed"].map(f => (
                <button
                  key={f}
                  className={`btn btn-outline-primary ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <input
              type="text"
              className="form-control w-50"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <TodoList todos={filteredTodos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
