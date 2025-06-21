import React from 'react';

function Resume() {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center text-primary">Resume</h2>

      {/* Experience Section */}
      <div className="mb-4">
        <h4 className="mb-3 text-success">Experience</h4>
        <ul className="list-group shadow-sm">
          <li className="list-group-item">
            <strong>Python Full Stack Trainee</strong> at <span className="text-info">VTS</span> (2024 - Present)
            <br />
            Trained on HTML, CSS, JavaScript, and React. Built real-world projects and practiced end-to-end development.
          </li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <h4 className="mb-3 text-success">Education</h4>
        <ul className="list-group shadow-sm">
          <li className="list-group-item">
            <strong>ME in Computer Science</strong> – Kamaraj College of Engineering and Technology (2014 - 2016)
          </li>
        </ul>
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          className="btn btn-primary px-4 d-inline-flex align-items-center gap-2"
          href="/resume.pdf"
          download
        >
          <i className="bi bi-download"></i> Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
