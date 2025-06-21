import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [autoIncrement, setAutoIncrement] = useState(false);

  // Auto-increment effect
  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000); // every 1 second
    }
    return () => clearInterval(interval); // clean up
  }, [autoIncrement]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? '#222' : '#f8f9fa',
    color: darkMode ? 'white' : 'black',
    transition: 'all 0.3s'
  };

  return (
    <div style={containerStyle}>
      <Topbar />

      <div className="container text-center py-5">
        <h2 className="mb-4">Current Count: <span className="text-primary">{count}</span></h2>

        <div className="mb-3">
          <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)}>
            ➖ Decrement
          </button>
          <button className="btn btn-success me-2 " onClick={() => setCount(count + 1)}>
            ➕ Increment
          </button>
          
          <button className="btn btn-secondary" onClick={() => setCount(0)}>
            🔁 Reset
          </button>
        </div>

        <div className="mt-3">
          <button
            className={`btn ${autoIncrement ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => setAutoIncrement(!autoIncrement)}
          >
            {autoIncrement ? '⏸ Stop Timer' : '▶ Start Timer'}
          </button>
        </div>

        <div className="form-check form-switch mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            id="themeToggle"
          />
          <label className="form-check-label" htmlFor="themeToggle">
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
