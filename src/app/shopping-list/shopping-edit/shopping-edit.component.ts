import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {IngredientService} from '../../shared/ingredient.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  sub: Subscription;
  editItemIndex:number;
  editItem:Ingredient;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.sub=this.ingredientService.startedEditing.subscribe(
      (index:number) => {
        this.editItemIndex=index;
        this.editMode=true;
        debugger;
        this.editItem=this.ingredientService.getIngredient(index);
        // has problem to set form values
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm){
    const value=form.value;
    const newIngredient=new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.ingredientService.updateIngredient(this.editItemIndex, newIngredient);
    }
    else{
      this.ingredientService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.onReset();
  }

  onClear(){
    this.slForm.onReset();
    this.editMode=false;
  }

  onDelete(){
    this.ingredientService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
