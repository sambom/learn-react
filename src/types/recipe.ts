export interface RecipeProps {
    id: string;
    name: string;
    ingredients: Set<string>;
}

export interface IngredientListProps {
    ingredients: Set<string>;
}