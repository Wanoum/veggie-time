import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  title = "Liste d'ingrédients";

  // Specific recipes ids given, otherwise we would generate 30 requests to display all ingredients
  recipesIds = ['54419', '3fc975', '37121'];
  // Trying to link the ingredients to it's recipe_id
  // recipesIds: any[] = [
  //   ['54419', ""],
  //   ['3fc975', ""],
  //   ['37121', ""]
  // ];
  ingredientsList: Ingredient[];

  apiUrl = "https://www.food2fork.com/api/";
  // Change between two keys if usage is > 50/day
  // apiKey = "f819bf2db90bef2af7caa780c39cb86b";
  apiKey = "5d31ce0bd45e28c4d494fc418525b083";
  paramsList = new HttpParams().set('key', this.apiKey).set('q', 'vegetarian'); // params sent to the URL

  constructor(private httpClient: HttpClient) {
    this.getIngredients();
  }

  getIngredients() {
    for (let recipe_id of this.recipesIds) {
      // Calls 3 requests
      this.httpClient.get<Recipe[]>(this.apiUrl + "get?key=" + this.apiKey + "&rId=" + recipe_id).subscribe(
        (result: any) => {
          // this.recipesIds = this.recipesIds[recipe_id][result.recipe.ingredients];
          this.ingredientsList = result.recipe.ingredients;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  ngOnInit() { }
}
