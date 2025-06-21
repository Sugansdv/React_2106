import React from 'react';

function AboutPage() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '700px' }}>
        <h2 className="text-center text-primary mb-4">About This App</h2>
        <p>
          This To-Do List App is built using <strong>React</strong> and <strong>Bootstrap</strong>.
          It allows users to manage daily tasks with features like adding, editing, deleting, filtering, and persisting data using <code>localStorage</code>.
        </p>
        
      </div>
    </div>
  );
}

export default AboutPage;
