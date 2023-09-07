import "../styles/featuredProducts.css";
import { featuredProducts } from "../assets/data/data";

const FeaturedProducts = () => {
  return (
    <section className="featured-main-container">
      <h2 className=" mb-5 text-4xl font-bold dark:text-white">
        Featured Products
      </h2>
      <hr
        style={{
          borderColor: "#c19a83",
          width: "20%",
          margin: "0rem auto 2rem auto",
        }}
      ></hr>
      <div className="featured-container">
        {featuredProducts.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} alt="product-01" />
              <h4 className="text-2xl font-bold dark:text-white">
                {product.productName}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {product.price}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default FeaturedProducts;
