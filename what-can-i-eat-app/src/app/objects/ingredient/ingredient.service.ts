import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicIngredient } from 'src/app/model/basic-ingredient/basicIngredient';
import { Ingredient, IngredientsListPayload } from 'src/app/model/ingredient/ingredient';
import { IngredientPayLoad } from 'src/app/model/ingredient/ingredientPayload';
import { Recipe } from 'src/app/model/recipe/recipe';
import { environment } from 'src/environments/environment';
import { IngredientApi } from './ingredient-api';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getIngredientList(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`https://o6s9dgdm4m.execute-api.eu-central-1.amazonaws.com/Prod/ingredients`);
  }

  getIngredientsByIds(numbers: number[]): Observable<IngredientApi[]> {
    let ids = new HttpParams();
    ids = ids.append("ids", numbers.join(', '));

    return this.http.get<IngredientApi[]>(`${this.apiURL}/v1/recipes/ingredients`, {params: ids});
  }

  deleteIngredient(ingredient: Ingredient): Observable<Ingredient> {
    let ingredientId = ingredient.id;
    return this.http.delete<Ingredient>(`${this.apiURL}/ingredient/${ingredientId}`);
  }

  createIngredient(ingredient: Ingredient): Observable<IngredientPayLoad> {
    let ing: IngredientPayLoad = {
      name: ingredient.name,
      amount: ingredient.amount,
      type: ''
    }

    return this.http.post<IngredientPayLoad>(`https://o6s9dgdm4m.execute-api.eu-central-1.amazonaws.com/Prod/ingredients`, ing);
  }

  modifyIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.patch<Ingredient>(`${this.apiURL}/ingredient`, ingredient);
  }

  postIngredientsList(ingredientsListPayload: IngredientsListPayload): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiURL}/recipe/list` , ingredientsListPayload);
  }

  getIngredientTagsList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/v2/basic-ingredients`);

    // let bIng: BasicIngredient = {
    //   id: 0,
    //   name: 'Leek',
    //   description: '',
    //   legacyId: 0,
    //   imageUrl: ''
    // }

    // let bIng1: BasicIngredient = {
    //   id: 0,
    //   name: 'Potato',
    //   description: '',
    //   legacyId: 0,
    //   imageUrl: ''
    // }

    // let bIng5: BasicIngredient = {
    //   id: 0,
    //   name: 'Pasta',
    //   description: '',
    //   legacyId: 0,
    //   imageUrl: ''
    // }

    // let bIng2: BasicIngredient = {
    //   id: 0,
    //   name: 'Tomato',
    //   description: '',
    //   legacyId: 0,
    //   imageUrl: ''
    // }

    // let bIng3: BasicIngredient = {
    //   id: 0,
    //   name: 'Onion',
    //   description: '',
    //   legacyId: 0,
    //   imageUrl: ''
    // }

    // return of([bIng, bIng1, bIng2, bIng3, bIng5]);
  }
}
