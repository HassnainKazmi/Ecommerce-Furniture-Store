import "../styles/featuredProducts.css";
import { featuredProducts } from "../assets/data/data";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [selectedColors, setSelectedColors] = useState({});

  useEffect(() => {
    const initialSelectedColors = {};
    featuredProducts.forEach((product) => {
      const randomColorIndex = Math.floor(
        Math.random() * product.colors.length
      );
      initialSelectedColors[product.id] = randomColorIndex;
    });
    setSelectedColors(initialSelectedColors);
  }, []);

  const handleColorChange = (productId, colorIndex) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: colorIndex,
    }));
  };

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
          const selectedColorIndex = selectedColors[product.id];
          return (
            <div className="featured-content" key={product.id}>
              <div className="span-container">
                <span>Sale!</span>
              </div>
              <img src={product.image[selectedColorIndex]} alt={product.name} />
              <h4 className="text-2xl font-bold dark:text-white mt-2">
                {product.productName}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {product.price}
              </p>
              <div className="color-options">
                {product.colors.map((colors, index) => (
                  <button
                    key={index}
                    className="button-color"
                    style={{
                      backgroundColor: colors,
                    }}
                    onClick={() => handleColorChange(product.id, index)}
                  ></button>
                ))}
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
