import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

// Note comment all but desired example below to see it work:

// *** A) REACT BASICS: ***

// eg 1:
//const myElement = <h1>Hello World!</h1>

// eg 2: use curly brackets for expressions:
//const myElement = <h1>React is {5 + 5} times better with JSX</h1>

/*
// eg 3: elements can contain nexted HTML:
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
*/

/*
// eg: 4: *!* HTML must be wrapped in ONE top level element (eg: <div> below):
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
*/

/*
// eg: 5: using <></a> fragments:
//
// Alternatively, you can use a "fragment" (<>...</>) to wrap multiple
// lines to prevent adding extra unnecessary nodes to the DOM:
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
*/

// eg 6: elements must be closed
//const myElement = <input type="text" />;

// eg 7: use "className" for "class":
//const myElement = <h1 className="myclass">Hello World</h1>;

/*
// eg 8: conditionals - if statements:
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const myElement = <h1>{text}</h1>;
*/

/*
// eg 9: contitionals - ternary form:
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
*/

// *** B) DEFINITING COMPONENTS: ***

/*
// eg 11: (Obsolete) Define Component the old way (Component format):
// *!* Components defined this way CANNOT USE HOOKS! *!*
class Vehicle extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
const myElement = <Vehicle />
*/

/*
// eg 12: Define a Function Component the new way (function component)
// TIP: Function Components defined this way CAN use hooks
function Vehicle() {
  return <h2>Hi, I am a Car!</h2>;
}
const myElement = <Vehicle />
*/

/*
// eg 13: Passing props to componeents:
function Vehicle(props) {
  return <h2>I am a {props.color} Car!</h2>;
}
const myElement = <Vehicle color="red" />
*/

/*
// eg: 14: Components in components:
function Vehicle() {
  return <h2>I am a Car!</h2>;
}
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}
const myElement = <Garage />
*/

/*
// eg 15: Define component in external file:
// <Car /> is defined in ./Car.js and included via import Car from './Car.js';
const myElement = <Car />
*/

/*
// eg 16: props with <Car /> from external file:
const myElement = <Car brand="Ford" />;
*/

/*
// eg 17: Passing data from <Car /> to Garage via props:
function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}
const myElement = <Garage />;
*/

// eg 18: Passing a variable rather than a srring:
function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}
const myElement = <Garage />;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);