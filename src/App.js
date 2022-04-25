import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* To wrap all components that need access to the cart 
      => App.js  모든 컴포넌트가 렌더 되는 컴포라서 */}
      {/* 모달을 눌렀을 때 닫히도록 하는 부분 */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* mamage the visibility of the Cart */}
      {/* we need to pass a pointer at the function down the props */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// Modal이 열렸다가 닫쳤다가 하는 상태
// Cart를 render하는 곳이 여기라서 여기서 useState 사용
