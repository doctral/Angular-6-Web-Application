import { Component, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {IngredientService} from '../../shared/ingredient.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  constructor() { }

  ngOnInit() {
  }

}
