import { Injectable } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {Subject} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredientsChanged = new Subject<Ingredient[]>(); 
  startedEditing = new Subject<number>();

  private ingredients:Ingredient[]=[
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredient(ingre:Ingredient){
    this.ingredients.push(ingre);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number, ingredient:Ingredient){
    this.ingredients[index]=ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
