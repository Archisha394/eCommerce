import Productsdata from "../../data/products.json";
import "./Products.css";
// map of products

function Product({ id, name, image, onAddtocart }) {
  return (
    <div key={id} className="product">
      <img src={require(`../../assets/${image}`)} alt={image} />
      <div className="product-name">{name}</div>
      <button onClick={() => onAddtocart(id, name, image)}>Add to cart</button>
    </div>
  );
}
function Products({ onAddtocart }) {
  return (
    <div className="Products-container">
      {Productsdata.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          onAddtocart={onAddtocart}
        />
      ))}
    </div>
  );
}

export default Products;
