import { IngredientListProps, RecipeProps } from "@/types/recipe";


export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

function Recipe(recipe: RecipeProps) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <IngredientList ingredients={recipe.ingredients} />
    </div>
  );
}

function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <ul>
      {Array.from(ingredients).map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}