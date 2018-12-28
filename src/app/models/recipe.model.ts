import { IngredientComponent } from '../ingredient/ingredient.component';

export class Recipe {
    recipe_id: string;
    title: string;
    image_url: string;
    source_url: string;
    publisher: string;
    publisher_url: string;
    ingredients: IngredientComponent;
}