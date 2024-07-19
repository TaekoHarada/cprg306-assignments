"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // API Fetching Function
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );

      const fetchData = await response.json();
      console.log(fetchData);
      // if the data is 'null', set an empty array
      const getMeals = fetchData.meals ? fetchData.meals : [];
      setMeals(getMeals);
      return getMeals;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  function loadMealIdeas() {
    fetchMealIdeas(ingredient);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <main className="m-5">
      <div>
        Ingredient:
        <b>
          <i> {ingredient}</i>
        </b>
      </div>
      <div className="flex flex-wrap items-baseline">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="mt-5 mr-5  border-solid border border-indigo-500"
          >
            <div className="w-44 p-2">{meal.strMeal}</div>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-44 h-44"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
