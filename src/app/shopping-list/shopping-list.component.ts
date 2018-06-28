import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {IngredientService} from '../shared/ingredient.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[];
  private sub: Subscription;
  constructor(private ingredientService:IngredientService) { }

  ngOnInit() {
    this.ingredients=this.ingredientService.getIngredients();
    this.sub=this.ingredientService.ingredientsChanged.subscribe((ingre: Ingredient[]) => {
      this.ingredients=ingre
      }
    );
  }

  onEditItem(index:number){
    this.ingredientService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
