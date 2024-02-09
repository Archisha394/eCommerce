import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart, setshowcart] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const handleAddToCart = (productId, productName, productImage) => {
    const cartItem = {
      id: productId,
      name: productName,
      image: productImage,
      quantity: 1,
    };
    setcartitems((state) => [...state, cartItem]);
  };
  const openCart = () => setshowcart(true);
  const closeCart = () => setshowcart(false);
  return (
    <div>
      <Header openCart={openCart} />
      <Products onAddtocart={handleAddToCart} />
      <Cart showCart={showCart} closeCart={closeCart} cartitems={cartitems}/>
    </div>
  );
}

export default App;
