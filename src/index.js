import React from 'react';
import ReactDOM from 'react-dom/client';

// Note comment all but desired example below to see it work:

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

// eg 9: contitionals - ternary form:
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);