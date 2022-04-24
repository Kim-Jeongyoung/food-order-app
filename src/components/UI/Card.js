import classes from './Card.module.css';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

// This is a wrapper component, whcih provides some HTML structure and some CSS code
//     