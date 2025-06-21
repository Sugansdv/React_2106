import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg p-5 text-center mx-auto" style={{ maxWidth: '700px' }}>
        <h1 className="mb-4 text-primary">Welcome to MyToDo App </h1>
        <p className="lead mb-4">
          Stay organized and productive by tracking your tasks efficiently.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/tasks" className="btn btn-success btn-lg">
            Get Started
          </Link>
          <Link to="/about" className="btn btn-outline-secondary btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
