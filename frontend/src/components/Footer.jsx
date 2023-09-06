import "../styles/footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <section className="footer-main-container">
        <div className="footer-container">
          <h1 className="text-4xl font-bold dark:text-white px-5">
            TrendSpace
          </h1>
          <div className="footer-content">
            <p
              className="mb-3"
              style={{ fontSize: "1.5rem", fontWeight: "600" }}
            >
              Subscribe
            </p>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-100"
                placeholder="johndoe@gmail.com"
                style={{ width: "98.25%" }}
              />
            </div>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div className="footer-bottom">
        <p style={{ fontWeight: "500" }}>
          Copyright © 2023 Furniture Shop | Powered by Furniture Shop
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook style={{ color: "#0084FF" }}></FaFacebook>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <AiFillInstagram style={{ color: "#E4405F" }}></AiFillInstagram>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <BsYoutube style={{ color: "#FF0000" }}></BsYoutube>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter style={{ color: "#1DA1F2" }}></FaTwitter>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
