import React, { useState } from 'react';
import Topbar from './components/Topbar';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') return setInput('');
    if (value === '←') return setInput(input.slice(0, -1));
    if (value === '=') {
      try {
        const result = eval(input); // Use with caution
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
      return;
    }
    setInput(input + value);
  };

  const buttons = [
    'AC', '←', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '.',
    '0', '='
  ];

  return (
    <>
      <Topbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card p-4 shadow-lg" style={{ width: '350px' }}>
          <input
            type="text"
            value={input}
            className="form-control text-end fs-4 mb-3"
            readOnly
          />
          <div className="row g-2">
            {buttons.map((btn, i) => (
              <div className="col-3" key={i}>
                <button
                  className={`btn ${btn === '=' ? 'btn-success' : btn === 'AC' ? 'btn-danger' : 'btn-outline-primary'} w-100`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
