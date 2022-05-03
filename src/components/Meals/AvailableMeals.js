import { useEffect, useState } from "react";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(meals);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-81e9d-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      // id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {/* output mealsList to ensures that JSX snippet is a bit leaner */}
        {/* Wrap with Card componet to using the same CSS */}
      </Card>
    </section>
  );
};

export default AvailableMeals;
