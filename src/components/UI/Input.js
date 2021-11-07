import React from 'react';
import classes from './Input.module.css';

// ref 사용하기 위해서 React.forwardRef 사용
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
