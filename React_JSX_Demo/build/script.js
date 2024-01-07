import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);
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

var Footer = function Footer() {
  return React.createElement(
    "div",
    { className: "site-footer" },
    React.createElement(
      "p",
      null,
      "Info Social media \xA9 "
    )
  );
};

var JSX = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
      "h1",
      null,
      "Hello World"
    ),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, dolore hic voluptatibus minima, id eaque, consectetur optio fugiat sit placeat beatae! Iure delectus earum, assumenda rerum temporibus qui dolorum hic? a"
    )
  ),
  ";",
  React.createElement(Footer, null)
);
root.render(JSX);