import React from "react";
import classes from "./Input.module.css";
// Input의 경우 custom component이기 때문에
// ref 사용하기 위해서 React.forwardRef 사용
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* <input id={props.input.id} {...props.input/> */}
      {/* <input {...props.input/> */}
      {/* This ensures that all the key value paris in this input object,
      which we receive on props input are added as props to input. */}
    </div>
  );
});

export default Input;
