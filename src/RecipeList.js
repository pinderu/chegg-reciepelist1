import React from "react";
import "./RecipeTable.css";

function RecipeList({ recipes, onDelete }) {

  const handleDelete = (index) => {
    onDelete(index);
  }


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes && recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} alt={recipe.name} className="recipe-photo" /></td>
              <td className="content_td">{recipe.ingredients}</td>
              <td className="content_td">{recipe.preparation}</td>
              <td><button name="delete" onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
