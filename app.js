import React from "react";
import ReactDOM from "react-dom/client";

//At the end of the day React.createElement is an object
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// console.log(heading);
//React Element
const heading =(
  <h1 id ="head">Namaste React Using JSX 🚀</h1>
)
const Title = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);


//React Functional Component

const HeadingComponent = () => {
  return <h1> Namaste React Functional Component </h1>;
};
const HeadingComponent2 = () => (
  <div id="container">
    <HeadingComponent />
    <Title />
    <h1 className="heading">React Functional Component Short Hnad Syntax</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
//JSX -is not HTML in JS
