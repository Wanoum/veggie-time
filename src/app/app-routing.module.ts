import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path: '', component: RecipeComponent}, // Default route
  {path: 'recettes', component: RecipeComponent},
  {path: 'recette/:recipe_id', component: RecipeDetailComponent}, // Give a param to the url
  {path: 'ajouter-recette', component: AddRecipeComponent}, // Give a param to the url
  {path: 'ingredients', component: IngredientComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aide', component: HelpComponent},
  {path: '**', redirectTo: 'recettes'} // If link is broken, redirect to recettes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
