import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
  {path: '', component: MainComponent}, // Default route
  {path: 'recettes', component: RecipeComponent},
  {path: 'recette/:recipe_id', component: RecipeDetailComponent}, // Give a param to the url
  {path: 'ajouter-recette', component: AddRecipeComponent}, // Give a param to the url
  {path: 'ingredients', component: IngredientComponent},
  {path: 'ingredient/:ingredient_id', component: IngredientDetailComponent}, // Give a param to the url
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'recettes'} // If link is broken, redirect to recettes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
