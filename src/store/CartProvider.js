import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    // Value={전달하고자 하는 data 넣기 }
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// To wrap all components that need access to the cart => App.js  모든 컴포넌트가 렌더 되는 컴포라서

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   return defaultCartState;
// };

// const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );

//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({ type: "ADD", item: item });
//   };

//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };

//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };
