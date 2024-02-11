import Modal from "../UI/Modal";
import "./AddProduct.css";
import { useRef } from "react";

function AddProduct({ showAddProduct, closeAddProduct,onAddProduct }) {
  const nameRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const namevalue = nameRef.current.value;
    onAddProduct(namevalue);
  };
  return (
    <Modal show={showAddProduct} onclose={closeAddProduct} >
      <div className="add-product-container">
        <div className="add-product-heading">Add Product</div>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-label">Enter Product Name</div>
          <input ref={nameRef} className="form-input" />
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}
export default AddProduct;
