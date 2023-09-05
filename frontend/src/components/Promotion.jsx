import "../styles/promotion.css";
import {
  FaShippingFast,
  FaRegCreditCard,
  FaShieldAlt,
  FaCartArrowDown,
} from "react-icons/fa";

const Promotion = () => {
  return (
    <section className="promotion-main-container">
      <h2 className=" mb-5 text-4xl font-bold dark:text-white">
        Why choose us
      </h2>
      <hr
        style={{
          borderColor: "#c19a83",
          width: "15%",
          margin: "0rem auto 2rem auto",
        }}
      ></hr>
      <div className="promotion-container">
        <div>
          <span style={{ fontSize: "2rem", color: "#c19a83" }}>
            <FaShippingFast></FaShippingFast>
          </span>
          <p className="text-2xl font-bold dark:text-white">Fast Delivery</p>
          <span className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </span>
        </div>
        <div>
          <span style={{ fontSize: "2rem", color: "#c19a83" }}>
            <FaRegCreditCard></FaRegCreditCard>
          </span>
          <p className="text-2xl font-bold dark:text-white">Free Shipping</p>
          <span className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </span>
        </div>
        <div>
          <span style={{ fontSize: "2rem", color: "#c19a83" }}>
            <FaShieldAlt></FaShieldAlt>
          </span>
          <p className="text-2xl font-bold dark:text-white">Secure Checkout</p>
          <span className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </span>
        </div>
        <div>
          <span style={{ fontSize: "2rem", color: "#c19a83" }}>
            <FaCartArrowDown></FaCartArrowDown>
          </span>
          <p className="text-2xl font-bold dark:text-white">Easy Returns</p>
          <span className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </span>
        </div>
      </div>
    </section>
  );
};
export default Promotion;
