package com.example.ingredientservice.service;


import com.example.ingredientservice.model.Ingredient;

import java.util.List;

public interface IngredientService {
    Ingredient addNewIngredient(Ingredient ingredient);

    List<Ingredient> getIngredientList();

    void deleteIngredient(int ingredientId);

    Ingredient modifyIngredient(Ingredient ingredient);
}
