import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Green Papaya Sald',
    description:
      'Shredded green papaya tossed with Thai basil & served with dried sesame beef. Can be made with tofu or shrimp.',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Avocado & Kale Salad',
    description:
      'Chopped kale, shaved Brussels sprouts, Parmesan cheese, sliced almonds, avocado; served with almond-tahini dressing.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Basil Tofu',
    description:
      'Crisp tofu wok-tossed with garlic & basil in a seasoned soy sauce; finished with crisp basil.',
    price: 15.99,
  },
  {
    id: 'm4',
    name: 'Lemongrass Sea Bass',
    description:
      'Lemongrass & garlic sea bass served with a cold mango & cilantro glass noodle salad.',
    price: 36.25,
  },
];

const AvailanleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailanleMeals;
