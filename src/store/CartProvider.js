import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// The action is dispatched by you later in your code
// and the state is simply the last state snapshot of the state managed by the reducer
// return new state snapshot
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // 1. add our item as a new item in that Array
    // 2. group items for the same meal together
    // 3.manage the amount on a per meal basis
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Removing items from the cart
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      // 아래에 id로 이름을 지정해 줬으므로 id로 사용
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //clear the cart
  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  // firtst element: state snapshot
  // second element: this function which allows you to dispatch an action the useReducer.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // type or identifier =>naming is up to you.
    // convention type: '' : having a sring all caps identifier
    // add item in the reducer function then to add item in the reducer function
    // i also forward the item as part of the action
    // item:정해준 이름:item: point at my item argument
    // forwarding the item which I expect to get here
    // on this function(addItemToCartHandler) to my reducer
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* this allows us to wrap any components
      that should get access to this context 
      with this cart provider component */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
