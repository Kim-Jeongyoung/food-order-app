import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const CartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Green Papaya Sald', amount: 2, price: 22.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      <div>
        {CartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>45.98</span>
        </div>
        <div>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
