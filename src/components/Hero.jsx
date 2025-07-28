import { useState } from "react";
import spinner from "../assets/bouncing-ball.svg";
import Ingredients from "./Ingredients";
import { getRecipeMeta } from "../ai.js";
import ChefRecipe from "./ChefRecipe.jsx";

export default function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState("");
  const [loading, setLoading] = useState(false); // NEW

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }
  async function getRecipe() {
    setLoading(true); // NEW
    setRecipeShown(""); // Clear previous recipe
    const generatedRecipe = await getRecipeMeta(ingredients);
    setRecipeShown(generatedRecipe);
    setLoading(false); // NEW
  }

  return (
    <main>
      <form action={addIngredient} className="ingredient-form">
        <input
          type="text"
          placeholder="eg: onions"
          aria-label="ingredient"
          name="ingredient"
        />
        <button>Add</button>
      </form>
      {ingredients.length > 0 && (
        <Ingredients ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {loading && (
        <div className="loading-spinner">
          <img
            src={spinner}
            alt="Loading"
            width={80}
            height={80}
            style={{ marginLeft: 20 }}
          />
          <span style={{ marginLeft: 8 }}>Loading...</span>
        </div>
      )}
      {recipeShown && <ChefRecipe recipeShown={recipeShown} />}
    </main>
  );
}
