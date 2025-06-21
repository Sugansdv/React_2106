import React from 'react';
import './Work.css'

function Work() {
  const projects = [
    {
      title: 'Baby Products shopping',
      desc: '',
      link: '#',
      image: '/Baby_Products.jpg'
    },
    {
      title: 'Home Services',
      desc: '',
      link: '#',
      image: '/Home_Service.jpg'
    },
    {
      title: 'Personalized Diet Nutrition Planner WEbsite',
      desc: '',
      link: '#',
      image: '/Personalized_Diet_Nutrition_Planner.jpg'
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
