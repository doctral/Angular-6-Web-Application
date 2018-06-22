import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {IngredientService} from '../shared/ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private ingredientService:IngredientService) { }

  ngOnInit() {
    this.ingredients=this.ingredientService.getIngredients();
  }

}
