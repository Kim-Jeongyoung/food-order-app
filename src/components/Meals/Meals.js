import { Fragment } from 'react';

import AvailanleMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailanleMeals />
    </Fragment>
  );
};

export default Meals;
