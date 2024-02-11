import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import initialProducts from "./data/products.json";

function App() {
  const [showCart, setshowcart] = useState(false); // for cart
  const [showAddProduct, setshowaddproduct] = useState(false); // for add product

  const [cartitems, setcartitems] = useState([]); //fpr cart items
  const [products, setproducts] = useState([...initialProducts]); // for the products displayed on feed

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

  const handleAddProduct = (productName) => {
    const product = {
      id: products.length + 1,
      name: productName,
      image: "default_product.png",
    };
    setproducts((state) => [...state, product]);
    closeAddProduct();
  };

  const openCart = () => setshowcart(true);
  const closeCart = () => setshowcart(false);
  const openAddProduct = () => setshowaddproduct(true);
  const closeAddProduct = () => setshowaddproduct(false);

  return (
    <div>
      <Header openCart={openCart} openAdd={openAddProduct} />
      <Products products={products} onAddtocart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartitems={cartitems}
        onIncQuantity={handleIncreasequantity}
        onDecQuantity={handleDecreasequantity}
      />
      <AddProduct
        showAddProduct={showAddProduct}
        closeAddProduct={closeAddProduct}
        onAddProduct={handleAddProduct}
      ></AddProduct>
    </div>
  );
}

export default App;
