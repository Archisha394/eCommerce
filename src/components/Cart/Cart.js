import Modal from "../UI/Modal";
import "./Cart.css";

function CartItem({ id, name, image, quantity, onIncQuantity, onDecQuantity }) {
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
              onClick={() => onIncQuantity(id)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="yellow-button qty-button"
              onClick={() => onDecQuantity(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Cart({ showCart, closeCart, cartitems, onDecQuantity, onIncQuantity }) {
  return (
    <Modal show={showCart} onclose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartitems.length > 0 ? (
          cartitems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
              onDecQuantity={onDecQuantity}
              onIncQuantity={onIncQuantity}

            />
          ))
        ) : (
          <div className="empty-cart"> Cart is empty </div>
        )}
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
