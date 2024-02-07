import Modal from "../UI/Modal";
function Cart({ showCart, closeCart }) {
  return (
    <Modal show={showCart} onclose={closeCart}>
      Hello from Cart
    </Modal>
  );
}
export default Cart;
