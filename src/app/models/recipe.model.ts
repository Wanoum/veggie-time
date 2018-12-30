import { Ingredient } from './ingredient.model';

export class Recipe {
    // Same names as properties of the API
    recipe_id: string;
    title: string;
    image_url: string;
    source_url: string;
    publisher: string;
    publisher_url: string;
    ingredients: Ingredient[];
}