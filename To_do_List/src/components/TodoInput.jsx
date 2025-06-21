import React, { useState } from 'react';

function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
    setInput('');
  };

  return (
    <form onSubmit={handleAdd} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
