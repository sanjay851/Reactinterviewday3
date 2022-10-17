import React from 'react'
import { useRef, useState } from "react";

export const UseRef = () => {
  const myName = useRef("");
  const [show, setShow] = useState(false);
  const submitForm = () => {
    const enteredName = myName.current.value;
    enteredName === "" ? alert("Enter Name!") : setShow(true);
  };
  return (
    <div>
      <h1>Q6.What is UseRef Hook ?(Implementation)</h1>
      <p className='axios'>useRef(initialValue)is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a single property “current”,
         which can be accessed and changed (mutated).
         <br />
         The useRef hook has its origin in the createRef method that is used in class components and that allowed to create a “reference” (forgive redundancy) to a DOM element created during rendering.
       <br />
        useRef () is basically useState current: initialValue [0]
        This means that we can modify the value of the current property of the value returned by useRef at any time:
        <br />
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
        </p>
        <div className='reduce'>
        <input placeholder="Enter Name" type="text" name="name" ref={myName} />
      <button onClick={submitForm}>Submit</button>
      <h2>{show ? `My Name is ${myName.current.value}` : " "}</h2>
        </div>
       
      </div>
  )
}
