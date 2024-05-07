import React, { useState } from "react";
import "./RecipeTable.css";
function RecipeCreate({ addRecipe }) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(inputs);
    console.log(inputs);
    setInputs({});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Name:
                <input name="name" type="text" value={inputs.name || ""} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label>Cuisine:
                <input name="cuisine" type="text" value={inputs.cuisine || ""} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label> Photo URL:
                <input name="photo" type="text" value={inputs.photo || ""} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label>
                Ingredients:
                <textarea
                  name="ingredients"
                  value={inputs.ingredients || ""}
                  onChange={handleChange}
                ></textarea>
              </label>
            </td>
            <td>
              <label>
                Preparation:
                <textarea
                  name="preparation"
                  value={inputs.preparation || ""}
                  onChange={handleChange}
                ></textarea>
              </label>
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
