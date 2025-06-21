import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([...notes, note]);
  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));
  const editNote = (updatedNote) =>
    setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)));

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <NoteForm addNote={addNote} />
        <hr />
        <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </div>
    </>
  );
}

export default App;
