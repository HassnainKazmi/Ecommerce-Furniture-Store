import "../styles/navigationBar.css";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <nav className="navigation-main-container">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5x text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        TrendSpace
      </h1>
      <div className="navigation-container">
        <ul>
          <li>Shop All</li>
          <li>Decor</li>
          <li>Office</li>
          <li>Living Room</li>
          <li>Bedroom</li>
        </ul>
        <span style={{ fontSize: "1.25rem" }}>
          <BiSearch></BiSearch>
        </span>
      </div>
      <div className="navigation-container">
        <ul>
          <li>Contact</li>
          <li>Track Order</li>
          <li>Help</li>
        </ul>
        <span style={{ fontSize: "1.25rem" }}>
          <BsCart4></BsCart4>
        </span>
      </div>
    </nav>
  );
};
export default NavigationBar;
