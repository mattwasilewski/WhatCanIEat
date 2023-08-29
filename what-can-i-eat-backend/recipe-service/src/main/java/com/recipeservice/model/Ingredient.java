package com.recipeservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "recipe_ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ingredient")
    private String completeIngredientData;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "recipe_id")
    @JsonIgnore
    private Recipe recipe;
}
