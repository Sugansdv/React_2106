import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-primary mb-4">🌍 Welcome to WeatherApp</h1>
      <p className="lead">Get real-time weather updates by city name.</p>
      <Link to="/weather" className="btn btn-success btn-lg mt-3">Check Weather</Link>
    </div>
  );
}

export default HomePage;
