import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React</h1>
        {/* use any name you want becasue you will have to write code 
        inside of HeaderCartButton to handle this prop anyways. */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {/* CSS class with a dash inside of it we can't use dot notation so use [ ] */}
        <img src={mealsImage} alt="Delicious food!" />
        {/* binding the source dynamically using { } */}
      </div>
    </Fragment>
  );
};

export default Header;
