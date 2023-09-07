import "../styles/featuredProducts.css";
import product01 from "../assets/images/product-01.jpg";
import product10 from "../assets/images/product-10.jpg";
import product12 from "../assets/images/product-12.jpg";
import product13 from "../assets/images/product-13.jpg";
import product02 from "../assets/images/product-02.jpg";
import product11 from "../assets/images/product-11.jpg";

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
        <div>
          <img src={product01} alt="product-01" />
          <h4 className="text-2xl font-bold dark:text-white">Product Name 1</h4>
          <p className="text-gray-500 dark:text-gray-400">$85.00 - $99.00</p>
        </div>
        <div>
          <img src={product10} alt="product-10" />
          <h4 className="text-2xl font-bold dark:text-white">
            Product Name 10
          </h4>
          <p className="text-gray-500 dark:text-gray-400">$85.00 - $99.00</p>
        </div>
        <div>
          <img src={product12} alt="product-12" />
          <h4 className="text-2xl font-bold dark:text-white">
            Product Name 12
          </h4>
          <p className="text-gray-500 dark:text-gray-400">$85.00 - $99.00</p>
        </div>
        <div>
          <img src={product13} alt="product-13" />
          <h4 className="text-2xl font-bold dark:text-white">
            Product Name 13
          </h4>
          <p className="text-gray-500 dark:text-gray-400">$85.00 - $99.00</p>
        </div>
        <div>
          <img src={product02} alt="product-02" />
          <h4 className="text-2xl font-bold dark:text-white">Product Name 2</h4>
          <p className="text-gray-500 dark:text-gray-400">$85.00 - $99.00</p>
        </div>
        <div>
          <img src={product11} alt="product-11" />
          <h4 className="text-2xl font-bold dark:text-white">
            Product Name 11
          </h4>
          <p className="text-gray-500 dark:text-gray-400">$85.00 - $99.00</p>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
