import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <NavLink className="navbar-brand" to="/">MyPortfolio</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {['/', '/about', '/resume', '/work', '/contact'].map((path, i) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  className="nav-link"
                  end={path === '/'}
                >
                  {['Home', 'About', 'Resume', 'Work', 'Contact'][i]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
