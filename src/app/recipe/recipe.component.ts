import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
  title = "Liste de recettes";

  // Model of recipe in /models/recipe.model.ts
  recipesList: Observable<Recipe[]>;

  apiUrl = "https://www.food2fork.com/api/";
  // Change between two keys if usage is > 50/day
  apiKey = "f819bf2db90bef2af7caa780c39cb86b";
  // apiKey = "5d31ce0bd45e28c4d494fc418525b083";
  paramsList = new HttpParams().set('key', this.apiKey).set('q', 'vegetarian'); // params sent to the URL

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getRecipes();
  }

  // Calls the API and load the content in the recipesList, which is used in the template
  getRecipes() {
    this.httpClient.get<Recipe[]>(this.apiUrl + "search?" + this.paramsList).subscribe(
      (result: any) => {
        this.recipesList = result.recipes;
        // result is the object from the API, but an array of recipes is contained in the object called recipes
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() { }
}
