import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {
  recipe_id: string;
  recipe: Recipe[];

  apiUrl = "https://www.food2fork.com/api/";
  // Change between two keys if usage is > 50/day
  // apiKey = "f819bf2db90bef2af7caa780c39cb86b";
  apiKey = "5d31ce0bd45e28c4d494fc418525b083";

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getRecipeDetail(recipe_id) {
    this.httpClient.get<Recipe[]>(this.apiUrl + "get?key=" + this.apiKey + "&rId=" + this.recipe_id).subscribe(
      (result: any) => {
        this.recipe = result.recipe;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    let recipe_id = this.route.snapshot.paramMap.get('recipe_id');
    this.recipe_id = recipe_id;
    this.getRecipeDetail(recipe_id);
  }
}
