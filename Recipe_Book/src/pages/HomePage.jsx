import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-danger mb-3"> Welcome to RecipeBook</h1>
      <p className="lead">Browse and cook your favorite dishes.</p>
      <Link to="/recipes" className="btn btn-danger mt-3">Explore Recipes</Link>
    </div>
  );
}

export default HomePage;
