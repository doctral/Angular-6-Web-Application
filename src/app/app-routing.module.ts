import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
const appRoutes: Routes=[
  {path:"",redirectTo:"/recipes", pathMatch:"full"},
  {path:"recipes", component:RecipesComponent},
  {path:"shopping-list", component:ShoppingListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
