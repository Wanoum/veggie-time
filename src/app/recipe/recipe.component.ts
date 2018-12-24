import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  title = "Liste de recettes";

  recipes: Recipe[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Recipe[]>('https://api.edamam.com/search?q=vegetarian&app_id=d0ad95d2&app_key=634dfa72ea281945eda42389a3209699').subscribe(
      (result: Recipe[]) => {
        this.recipes = result.hits[];
        console.log(this.recipes);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
