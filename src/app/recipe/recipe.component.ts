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

  recipesList: Observable<Recipe[]>;
  selectedId: number;
  // recipesList: Recipe[];
  recipe: Recipe[];

  apiUrl = "https://www.food2fork.com/api/";
  apiKey = "5d31ce0bd45e28c4d494fc418525b083";
  paramsList = new HttpParams().set('key', this.apiKey).set('q', 'vegetarian');

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getRecipes();
  }

  getRecipes() {
    // console.log(this.apiUrl + "search?" + this.params);
    this.httpClient.get<Recipe[]>(this.apiUrl + "search?" + this.paramsList).subscribe(
      (result: any) => {
        this.recipesList = result.recipes;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getRecipeDetails(idRecipe) {
    
    // this.httpClient.get<Recipe[]>(this.apiUrl + "get?key=" + this.apiKey + "rId=" + idRecipe).subscribe(
    //   (result: any) => {
    //     this.recipe = result.recipes;
    //     console.log(idRecipe);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }

  ngOnInit() { }
}
