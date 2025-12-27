import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
* A React component is a pice of UI/ JSX
* JSX is HTML in the form of JavaScript
* Below is an example for React component
*/

/**
 * Every React component starts with capital letter
 * Where html starts with small letter
 * JSX is stricter than HTML every bracket should be closed
 * Even <br/> should be closed
 * Every component should use a wrapper like div or empy <></> into a sahred parent
 * We can also use online converter to port existing html to JSX
 * below function(Component) @returns JSX called MyButton
 */

/**
 * 
 * Adding styles:
 * In React, you specify a CSS class with className.
 *  It works the same way as the HTML class attribute:
 * <img className="avatar" />
 * Then you write the CSS rules for it in a separate CSS file:
 * .avatar {
 *   border-radius: 50%;
 * }
 * React does not prescribe how you add CSS files.
 * In the simplest case, you’ll add a <link> tag to your HTML. 
 * If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.
*/
function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

/**
 * 
 * Example for displaying data
 * Read more here:
 * https://react.dev/learn#displaying-data
 */
function ShoppingList() {
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
    const listItems = products.map(product => 
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

function EventButton() {
    function handelClick() {
        alert("You clicked me!")
    }
/*
* Here onClick does not have parentheses
* event handler function shouldn't be called here:
* it only needs to be passed down
* React will call event handler when the user clicks the button
*/
    return (
        <button onClick={handelClick}>
            Click me
        </button>
    )
}

/**
 * 
 * Updating the screen
 * Often, you’ll want your component to “remember” some information and display it. 
 * For example, maybe you want to count the number of times a button is clicked. 
 * To do this, add state to your component.
 * First, import useState from React:
 * import { useState } from 'react';
 * Now you can declare a state variable inside your component:
 * function MyButton() {
 * const [count, setCount] = useState(0);
 * You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). 
 * You can give them any names, but the convention is to write [something, setSomething].
 */

/**
 * Example for conditional rendering
 * let content;
 * if (isLoggedIn) {
 * content = <AdminPanel />;
 * } else {
 * content = <LoginForm />;
 * }
 * return (
 *  <div>
 *      {content}
 *      </div>
 *  );
 */

function UseStateExample() {
    const [count, setCount] = useState(0);

    function handelClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handelClick}>
            Cliked {count} times
        </button>
    )
}

/*
 * Example for nesting components
 * If used same component multiple time it'll get it's own state
 * Meaning that clicking a button won't update each other, they're in different state
 * state is nothing but they remember individually how many times they were each clicked
*/

/**
 * 
 * Using Hooks:
 * https://react.dev/learn#using-hooks
 * Functions starting with use are called Hooks. useState is a built-in Hook provided by React
 * There are more other built-in Hooks in the API reference: https://react.dev/reference/react
 * We can also write our-own hooks by combining existing ones
 * Hooks are more restrictive than functions
 * We can only call Hooks at the top of the components
 */

function MyPropsButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

/**
 * 
 * Information that can be passed down like this is called props
 */
export default function MyApp() {
    const [count, setCount] = useState(0);

    function InformationPassingWithComponents() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <MyButton/>
            <AboutPage/>
            <EventButton/>
            <ShoppingList/>
            <UseStateExample/>
            <UseStateExample/>
            <h1>Counters that updates together</h1>
            <MyPropsButton count={count} onClick={InformationPassingWithComponents}/>
            <MyPropsButton count={count} onClick={InformationPassingWithComponents}/>
        </div>
    );
}

