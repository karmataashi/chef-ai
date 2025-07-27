export default function Ingredients(props) {
  const newIngredients = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section className="ingredients">
      <div className="ingredients-container">
        <h2>Ingredients:</h2>
        <ul className="ingredients-list">{newIngredients}</ul>
      </div>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>
              Generate a recipe from your list of ingredients using CHEF AI.
            </p>
          </div>
          <button>Generate</button>
        </div>
      )}
    </section>
  );
}
