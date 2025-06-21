import React from 'react';

function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 text-primary">
        Welcome to My Portfolio
      </h1>
      <p className="lead mt-3 text-secondary">
        <i className="bi bi-code-slash me-2 text-danger"></i>
        I’m a passionate developer ready to build amazing web experiences.
      </p>
      <div className="mt-4">
        <i className="bi bi-github fs-3 mx-2 text-dark" title="GitHub" style={{ cursor: 'pointer' }}></i>
        <i className="bi bi-linkedin fs-3 mx-2 text-primary" title="LinkedIn" style={{ cursor: 'pointer' }}></i>
        <i className="bi bi-envelope fs-3 mx-2 text-warning" title="Email" style={{ cursor: 'pointer' }}></i>
      </div>
    </div>
  );
}

export default Home;
