import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';

function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="container py-5">
        <h4 className="text-danger">Recipe not found</h4>
        <Link to="/recipes" className="btn btn-outline-secondary mt-3">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg mx-auto" style={{ maxWidth: '700px' }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="card-img-top"
          style={{ objectFit: 'cover', height: '300px' }}
        />
        <div className="card-body">
          <h2 className="text-danger">{recipe.title}</h2>
          <p className="lead">{recipe.description}</p>

          <h5 className="mt-4">Ingredients:</h5>
          <ul className="list-group list-group-flush mb-3">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx} className="list-group-item">{item}</li>
            ))}
          </ul>

          <h5>Steps:</h5>
          <ol className="ps-3">
            {recipe.steps.map((step, idx) => (
              <li key={idx} className="mb-2">{step}</li>
            ))}
          </ol>

          <Link to="/recipes" className="btn btn-outline-secondary mt-4">
            ⬅ Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
