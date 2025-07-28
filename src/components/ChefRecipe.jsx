import ReactMarkdown from "react-markdown";

export default function ChefRecipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>AI Recipe Suggestion</h2>
      <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
    </section>
  );
}
