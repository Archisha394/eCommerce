import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import React from "react";
function App() {
  const [showcart, setshowcart] = useState(false);
  const openCart = () => setshowcart(true);
  const closeCart = () => setshowcart(false);
  return (
    <div>
      <Header openCart={openCart} />
      <Products />
    </div>
  );
}

export default App;
