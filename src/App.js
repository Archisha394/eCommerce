import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart, setshowcart] = useState(false);
  const openCart = () => setshowcart(true);
  const closeCart = () => setshowcart(false);
  return (
    <div>
      <Header openCart={openCart} />
      <Products />
      <Cart showCart={showCart} closeCart={closeCart}/>
    </div>
  );
}

export default App;
