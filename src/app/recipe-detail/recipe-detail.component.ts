import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {
  recipe_id: string;
  recipe: Recipe[];
  ingredientsList: Ingredient[];

  apiUrl = "https://www.food2fork.com/api/";
  // Change between two keys if usage is > 50/day
  // apiKey = "f819bf2db90bef2af7caa780c39cb86b";
  apiKey = "5d31ce0bd45e28c4d494fc418525b083";

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  // Calls the API URL which displays a single page information of a recipe
  getRecipeDetail(recipe_id) {
    this.httpClient.get<Recipe[]>(this.apiUrl + "get?key=" + this.apiKey + "&rId=" + this.recipe_id).subscribe(
      (result: any) => {
        this.recipe = result.recipe;
        // The result from the API is an object which contains an array recipe with the informations
        this.ingredientsList = result.recipe.ingredients;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // When page is initialized, get the recipe id that was sent thanks to the param in the URL
  ngOnInit() {
    let recipe_id = this.route.snapshot.paramMap.get('recipe_id');
    this.recipe_id = recipe_id; // Get the recipe id from the URL param and load it in the local recipe_id variable
    this.getRecipeDetail(this.recipe_id); // Display the detail
  }
}
