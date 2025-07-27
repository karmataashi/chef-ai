import { useState } from "react";
import Ingredients from "./Ingredients";

export default function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
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
      {ingredients.length > 0 && <Ingredients ingredients={ingredients} />}
    </main>
  );
}
