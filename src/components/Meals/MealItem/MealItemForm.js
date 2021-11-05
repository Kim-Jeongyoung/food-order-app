import {useRef, useState} from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid() => useState(true)]
  const amountInputRef =useRef();

  const submitHandler = (event) => {
    event.preventdefault();

    const enteredAmount = amountInputRef.current.value;
    // convert string to Number
    const enteredAmountNumber =+enteredAmount;

    if (
      enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber >5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);





  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref={amountInputRef}
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <P>Please enter a valid (1-5)</P>}
    </form>
  );
};

export default MealItemForm;
