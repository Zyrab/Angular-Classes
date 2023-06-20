import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe ('A test Recipe' , 'This is a simple Test' , 'https://gastronomia.ge/wp-content/uploads/2019/04/0bb44d60c446d13af892245c2311d15d.jpg' )
  ];


}
