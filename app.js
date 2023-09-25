/* NESTED HTML STRUCTURE IN REACT  Using React.createElement

<div id="parent">
<div id ="child">
<h1> I'm H1 Tag</h1>
<h2>I'm an H2 Tag</h2>
</div>
<div id ="child2">
<h1> I'm H1 Tag</h1>
<h2>I'm an H2 Tag</h2>
</div>
</div>
 
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React!"
// );
// console.log(heading); //Object
// import React from "react";
// import { ReactDOM } from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an H1 Tag"),
//     React.createElement("h2", {}, "I'm an H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an H1 Tag"),
//     React.createElement("h2", {}, "I'm an H2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

//At the end of the day React.createElement is an object
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
