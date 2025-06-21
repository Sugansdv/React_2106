import React from 'react';
import './About.css'; // Add this if you're using external styles

function About() {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary">About Me</h2>

      {/* Profile and Info */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src="/vite.svg"
            alt="Profile"
            className="rounded-circle img-fluid shadow"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <h5 className="mt-3 fw-bold text-dark">Suganya S</h5>
          <p className="text-muted">Python Full Stack Developer</p>
        </div>

        <div className="col-md-8">
          <p className="text-secondary">
            I’m a passionate <strong className="text-dark">Python Full Stack Developer</strong> based in India. I specialize in building responsive and scalable web apps.
          </p>
          <ul className="list-group">
            <li className="list-group-item"><strong>Email:</strong> suganyasdv16@example.com</li>
            <li className="list-group-item"><strong>Phone:</strong> +91 6382603079</li>
            <li className="list-group-item"><strong>Location:</strong> Madurai, India</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <h4 className="mb-3 text-success">Skills</h4>
        <div className="row">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Git'].map((skill) => (
            <div className="col-6 col-md-4 mb-3" key={skill}>
              <div className="card border-0 shadow text-center h-100 skill-card hover-effect">
                <div className="card-body">
                  <h6 className="card-title mb-0">{skill}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-5">
        <h4 className="mb-3 text-success">Tools & Technologies</h4>
        <div>
          {['VS Code', 'GitHub', 'NPM', 'Vite'].map((tool) => (
            <span
              key={tool}
              className="badge bg-secondary me-2 mb-2 p-2 tool-badge"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
