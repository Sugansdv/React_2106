import React, { useState } from 'react';

function NoteList({ notes, deleteNote, editNote }) {
  const [editingId, setEditingId] = useState(null);
  const [edited, setEdited] = useState({ title: '', content: '' });

  const startEdit = (note) => {
    setEditingId(note.id);
    setEdited({ title: note.title, content: note.content });
  };

  const saveEdit = (id) => {
    editNote({ ...edited, id });
    setEditingId(null);
  };

  return (
    <div className="row">
      {notes.length === 0 && <p>No notes yet.</p>}
      {notes.map((note) => (
        <div className="col-md-4 mb-3" key={note.id}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              {editingId === note.id ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={edited.title}
                    onChange={(e) => setEdited({ ...edited, title: e.target.value })}
                  />
                  <textarea
                    className="form-control mb-2"
                    value={edited.content}
                    onChange={(e) => setEdited({ ...edited, content: e.target.value })}
                  />
                  <button className="btn btn-sm btn-success me-2" onClick={() => saveEdit(note.id)}>Save</button>
                  <button className="btn btn-sm btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <h5>{note.title}</h5>
                  <p>{note.content}</p>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => startEdit(note)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteNote(note.id)}>Delete</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
