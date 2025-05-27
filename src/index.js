import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Car from './Car.js';
import Car2 from './Car2.js';

// Note: this examples are from
// https://www.w3schools.com/react/default.asp
// but some have been altered to avoid name conflicts
// as the examples are commented/uncommented to prevent
// name conflicts. Only one example should be uncommented
// at a time.

// Note: ignore warnings about unused files,
// as you comment/uncomment the examples you will need the
// unused files sometimes for some examples.

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

/*
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
*/

/*
// eg 19: passing an object (CarInfo{}) into props:
// (Note: created a second <Car2 /> to avoid name conflict with earlier examples)
// *!* React Props are READ-ONLY! You will get an error if you try to change their value. *!*
function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car2 brand={ carInfo } />
    </>
  );
}
const myElement = <Garage />;
*/

// *** C) Events: ***

/*
// eg 20: onClick: (<-note the camel case)
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
const myElement = <Football />;
*/

/*
// eg 21: passing arguments:
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
const myElement = <Football />;
*/

/*
// eg: 22: Using the React event handler:
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    // 'b' represents the React event that triggered the function,
    // in this case the 'click' event
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}
const myElement = <Football />;
*/

// *** D) Conditionals: ***

/*
// eg: 23: component that chooses which component to render based on a condition:
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
const myElement = <Goal isGoal={false} />
*/

/*
// eg 24: Logical && Operator for conditional rendering:
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}
const cars = ['Ford', 'BMW', 'Audi'];
const myElement = <Garage cars={cars} />;
*/

/*
// eg 25: ternary condition (x ? output if true : output if false):
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}
const myElement = <Goal isGoal={false} />
*/

// *** E) Lists: ***

/*
// eg 26: render all of the cars from garage into a list:
// *!* This works but is incorrect and gives the following
// console warning:
//   Each child in a list should have a unique "key" prop
function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
const myElement = <Garage />
*/

/*
// eg 28: render all of the cars from garage into a list:
// (TIP: This is correct since each child in the list has
// a unique "key" prop)
function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}
const myElement = <Garage />
*/

// *** F) Forms: ***

/*
// eg 29: Basic form:
// This will work as normal, the form will submit and the page will refresh.
// But this is generally not what we want to happen in React.
// We want to prevent this default behavior and let React control the form.
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const myElement = <MyForm />
*/

/*
// eg 30: Use the useState Hook to manage the input:
// *!* Requires: import { useState } from 'react'; *!*
function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}
const myElement = <MyForm />
*/

/*
// eg 31: control the submit action by adding an event handler
// in the onSubmit attribute for the <form>:
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
const myElement = <MyForm />
*/

// eg 32: Form with multiple inputs:
//
// Tip: We use the same event handler function for both input fields,
// we could write one event handler for each,
// but this gives us much cleaner code
// and is the preferred way in React.
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
const myElement = <MyForm />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);