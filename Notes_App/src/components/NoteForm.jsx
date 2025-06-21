import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) return;
    addNote({ ...note, id: uuidv4() });
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Note</h4>
      <input
        type="text"
        placeholder="Title"
        className="form-control mb-2"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Your note..."
        rows="3"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <button className="btn btn-primary" type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
