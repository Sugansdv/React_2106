import React from 'react';
import './Work.css'

function Work() {
  const projects = [
    {
      title: 'Project One',
      desc: 'A React app for Grocery shopping.',
      link: '#',
      image: '/images/project1.jpg'
    },
    {
      title: 'Project Two',
      desc: 'A portfolio website.',
      link: '#',
      image: '/images/project2.jpg'
    },
    {
      title: 'Project Three',
      desc: 'Employee Payroll.',
      link: '#',
      image: '/images/project3.jpg'
    }
  ];

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">My Work</h2>
      <div className="row">
        {projects.map((project, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 shadow-sm project-card">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">{project.title}</h5>
                <p className="card-text text-muted">{project.desc}</p>
                <a
                  href={project.link}
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
