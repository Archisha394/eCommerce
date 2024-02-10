import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart, setshowcart] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const handleAddToCart = (productId, productName, productImage) => {
    const productincart = cartitems.findIndex((item) => item.id === productId);
    if (productincart === -1) {
      //prduct is new
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setcartitems((state) => [...state, cartItem]);
    } else {
      const updatedCartItems = [...cartitems];
      updatedCartItems[productincart].quantity += 1;
      setcartitems(updatedCartItems);
    }
  };
  //fucntion to iincrease or decrease the quantity
  const handleIncreasequantity = (productId) => {
    const productincart = cartitems.findIndex((item) => item.id === productId);
    const updatedCartItems = [...cartitems];
    updatedCartItems[productincart].quantity += 1;
    setcartitems(updatedCartItems);
  };
  const handleDecreasequantity = (productId) => {
    const productincart = cartitems.findIndex((item) => item.id === productId);
   const quanty = cartitems[productincart].quantity;
    let updatedCartItems = [...cartitems];
    if (quanty === 1) {
      updatedCartItems = updatedCartItems.filter(
        (item, index) => index !== productincart
      );
    } else {
      updatedCartItems[productincart].quantity -= 1;
      
    }
    setcartitems(updatedCartItems);
  };
  const openCart = () => setshowcart(true);
  const closeCart = () => setshowcart(false);
  return (
    <div>
      <Header openCart={openCart} />
      <Products onAddtocart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartitems={cartitems}
        onIncQuantity={handleIncreasequantity}
        onDecQuantity={handleDecreasequantity}
      />
    </div>
  );
}

export default App;
