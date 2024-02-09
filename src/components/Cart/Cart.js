import Modal from "../UI/Modal";
import "./Cart.css";

function CartItem({ id, name, image, quantity }) {
  return (
    <div key={id} className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty: {quantity}</div>
          <div>
            <button
              className="yellow-button qty-button qty-plus-button"
              // onClick={() => onIncQuantity(id)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="yellow-button qty-button"
              // onClick={() => onDecQuantity(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Cart({ showCart, closeCart, cartitems }) {
  return (
    <Modal show={showCart} onclose={closeCart}>
      <div className="Cart-container">
        <div className="Cart-heading">Cart</div>
        {cartitems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
        <div className="cart-buttons">
          <button className="black-button close-cart" onClick={closeCart}>
            Close
          </button>
          {cartitems.length > 0 && (
            <button className="yellow-button" onClick={closeCart}>
              Checkout
            </button>
          )}
        </div>

      </div>
    </Modal>
  );
}
export default Cart;
