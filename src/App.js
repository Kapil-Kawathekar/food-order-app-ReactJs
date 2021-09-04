import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
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
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart closeCart={hideCartHandler}></Cart>}
        <Header showCart={showCartHandler}></Header>
        <Meals></Meals>
      </CartProvider>
    </Fragment>
  );
}

export default App;
