import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'recettes', component: RecipeComponent},
  {path: 'ingredients', component: IngredientComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'recette/:recipe_id', component: RecipeDetailComponent},
  {path: '**', redirectTo: 'recettes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
