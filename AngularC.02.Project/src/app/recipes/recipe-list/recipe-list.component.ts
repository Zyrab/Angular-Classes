import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe ('Khachapuri' , 'Khachapuri is Gergian national dish. this is megrelian khachapuri.' , 'https://gastronomia.ge/wp-content/uploads/2019/04/0bb44d60c446d13af892245c2311d15d.jpg' ),
    new Recipe ('Khinkali' , 'Khinkali is national dish of Georgia. this is qalaquri.' , 'https://images.bolt.eu/store/2022/2022-06-09/33d5f5ee-db9c-40ee-ae1e-43c928c1527f.jpeg' )
  ];


}
