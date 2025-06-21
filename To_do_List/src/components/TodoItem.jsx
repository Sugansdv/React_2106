import React, { useState } from 'react';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const toggleComplete = () =>
    setTodos(prev =>
      prev.map(t => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
    );

  const handleDelete = () =>
    setTodos(prev => prev.filter(t => t.id !== todo.id));

  const handleEdit = (e) => {
    e.preventDefault();
    if (!editText.trim()) return;
    setTodos(prev =>
      prev.map(t => (t.id === todo.id ? { ...t, text: editText.trim() } : t))
    );
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-light' : ''}`}>
      {isEditing ? (
        <form className="d-flex flex-grow-1 me-3" onSubmit={handleEdit}>
          <input
            type="text"
            className="form-control me-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit" className="btn btn-success btn-sm me-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="btn btn-secondary btn-sm">Cancel</button>
        </form>
      ) : (
        <>
          <span
            className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through text-muted' : 'fw-medium'}`}
            style={{ cursor: 'pointer' }}
            onClick={toggleComplete}
          >
            {todo.text}
            {todo.completed && <span className="badge bg-success ms-2">Done</span>}
          </span>
          <div className="btn-group btn-group-sm">
            <button className="btn btn-outline-secondary" onClick={() => setIsEditing(true)}>
              ✏️
            </button>
            <button className="btn btn-outline-danger" onClick={handleDelete}>
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
