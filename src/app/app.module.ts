import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ContactComponent } from './contact/contact.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    HeaderComponent,
    MainComponent,
    ContactComponent,
    RecipeDetailComponent,
    FilterByNamePipe,
    AddRecipeComponent,
    IngredientDetailComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
