/* NESTED HTML STRUCTURE IN REACT  Using React.createElement

<div id="parent">
<div id ="child">
<h1> I'm H1 Tag</h1>
</div>
</div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React!"
// );
// console.log(heading); //Object
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an H1 Tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
