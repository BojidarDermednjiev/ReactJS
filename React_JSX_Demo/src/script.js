import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// const reactHeadingElement = React.createElement("h1", {}, "Hello World");
// const reactSecondHeadingElement = React.createElement("h2", {}, "Nindja code!");
// const head = React.createElement(
//   "header",
//   { className: "site-header" },
//   reactHeadingElement,
//   reactSecondHeadingElement
// );

// const Footer = () => {
//   return React.createElement(
//     "div",
//     { className: "site-footer" },
//     React.createElement("p", {}, "Info Social media")
//   );
// };

const Footer = () => (
  <div className="site-footer">
    <p>Info Social media &copy; </p>
  </div>
);

const JSX = (
  <div>
    <header className="site-header">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        dolore hic voluptatibus minima, id eaque, consectetur optio fugiat sit
        placeat beatae! Iure delectus earum, assumenda rerum temporibus qui
        dolorum hic? a
      </p>
    </header>
    ;
    <Footer />
  </div>
);
root.render(JSX);
