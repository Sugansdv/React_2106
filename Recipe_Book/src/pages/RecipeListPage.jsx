import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeListPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-danger"> Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-6 mb-4" key={recipe.id}>
            <div className="card shadow-sm h-100">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="btn btn-sm btn-outline-danger"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
