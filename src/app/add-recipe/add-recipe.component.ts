import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe = {
    recipe_id: "",
    title: "",
    image_url: "",
    source_url: "",
    publisher: "",
    publisher_url: "",
    ingredients: []
  };
  isSubmitted = false;

  constructor() { }

  ngOnInit() { }
}
