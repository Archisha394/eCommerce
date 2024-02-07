import "./Header.css";
function Header({openCart}) {
//   const [showcart, setshowcart] = useState(false);
//   const openCart = () => setshowcart(true);
//   const closeCart = () => setshowcart(false);
  
  return (
    <div className="header">
      <h1>My React Store</h1>
      <div className="options">
        {/* <button className="yellow-button">Add Product</button> */}
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      
        {/* <Modal show={showcart} onclose={closeCart}>
          Hello from Cart
        </Modal> */}
      
    </div>
  );
}
export default Header;
