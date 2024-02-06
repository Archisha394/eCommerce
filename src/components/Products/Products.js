import Productsdata from "../../data/products.json";
import "./Products.css";
// map of products

function Product({ id, name, image }) {
  return (
    <div key={id} className="product">
      <img src={require(`../../assets/${image}`)} alt={image} />
      <div className="product-name">{name}</div>
      <button>Add to cart</button>
    </div>
  );
}
function Products() {
  return (
    <div className="Products-container">
      {Productsdata.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Products;
