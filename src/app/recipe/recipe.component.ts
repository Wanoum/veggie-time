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
    this.httpClient.get<Recipe[]>('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
      (result: Recipe[]) => {
        this.recipes = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
