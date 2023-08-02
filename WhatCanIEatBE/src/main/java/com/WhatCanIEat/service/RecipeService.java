package com.WhatCanIEat.service;

import com.WhatCanIEat.model.Ingredient;
import com.WhatCanIEat.model.Recipe;

import java.util.List;

public interface RecipeService {

    Recipe addNewRecipe(Recipe recipe);

    List<Recipe> getRecipesList();
    List<Recipe> getFavoriteRecipes();

    void deleteRecipe(int recipeId);

    Recipe getRandomRecipe();
    Recipe addIngredientsToRecipe(List<Ingredient> ingredients);

    Recipe modifyRecipe(Recipe recipe);

    Recipe getRecipeById(int recipeId);
}
