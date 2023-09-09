import "../styles/featuredProducts.css";
import { featuredProducts } from "../assets/data/data";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
// import { useState } from "react";

const FeaturedProducts = () => {
  // const [color, setColor] = useState(null);

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
            <div className="featured-content" key={product.id}>
              <div className="span-container">
                <span>Sale!</span>
              </div>
              <img src={product.image} alt="product-01" />
              <h4 className="text-2xl font-bold dark:text-white">
                {product.productName}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {product.price}
              </p>
              <div className="color-options">
                <button
                  className="button-color"
                  style={{ backgroundColor: "#000000" }}
                ></button>
                <button
                  className="button-color"
                  style={{ backgroundColor: "#8f6453" }}
                ></button>
                <button
                  className="button-color"
                  style={{ backgroundColor: "#dabca2" }}
                ></button>
              </div>
              <div className="button-container">
                <button className="button">
                  <FaShoppingBasket></FaShoppingBasket>
                </button>
                <button className="button">
                  <BsFillEyeFill></BsFillEyeFill>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default FeaturedProducts;
