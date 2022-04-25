import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    // browser default of reloading the page is prevented
    event.preventDefault();
    // it's always stored current for refs created with useRef.value
    // Becasue amountInputRef.current will point at the input element
    // which is stored in that ref in the end
    // this value is always string
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    // forward enteredAmountNumber to MelaItem
    // expect to get throgh props to parse the entered and validated Number
    // to that function
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          // #138
          // id: 'amount'
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          // initial value which this input is populated
          // these are default props
          // these are all built-in props for input elements
          // distribute them onto the input
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

// two way binding
// for input we don't just listen to changes
// but we can also pass a new value back into the input
// we can reset or change the input programmatically
// using default attribute value: set the internal value property
// then we can set into a new value
