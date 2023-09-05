import "../styles/content.css";

const Content = () => {
  return (
    <section className="content-container">
      <p className="mb-1 text-black-500 dark:text-gray-400">
        Black Friday in November
      </p>
      <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Upto 50% off
      </h1>
      <p className="font-semibold text-gray-900 dark:text-white">
        Hundreds of styles available
      </p>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        SHOP NOW
      </button>
    </section>
  );
};
export default Content;
