import React ,{useReducer}from 'react'

const initialstate = 0;
const reducer = (state,action) =>
{
  switch (action) {
    case "plus":
      return state+1;
      case "minus":
      return state-1;
      case "reset":
      return 0;
    default:
      throw new Error("error");
  }
};

export const UseReducer = () => {
  const [state,dispatch] = useReducer(reducer,initialstate);
  return (
    <div>
      <div className='reduce'>
      <h2>{state}</h2>
      <button onClick={()=>dispatch("plus")}>Plus</button>
      <button onClick={()=>dispatch("minus")}>Minus</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
      </div>
      <h1>Q4.What is UseReducer Hook ?(Implementation)</h1>
      <p className='axios'>Reducers are functions that take input and decide what to do it with it in one central spot.</p>
      <p className='axios'>useReducer, which allows us to handle some complex state manipulations and updates</p>
      <p className='axios'>In React there are two main hooks that are used for state management, and we all know them. These are:
        useState, and
        useReducer</p>
        <p className='axios'>The useReducer hook is used for complex state manipulations and state transitions.  Just like the other React hooks, we can import useReducer from react as shown in the below 
          <pre>import React, { useReducer } from 'react';</pre>
          <p className='axios'>React.useReducer is a React hook function that accepts a reducer function, and an initial state.  </p>
        </p>
      <p className='axios'>const [state, dispatch] = useReducer(reducer, initialState);</p>
      <p className='axios'>This hook function returns an array with 2 values. The first one is the state value, and the second value is the dispatch function which is further used to trigger an action with the help of array destructuring.
        </p>
      <p className='axios'>We can Use React.useReducer when -----
      Your application architecture is complex and big in size  
      When the logic to update state is super complex or you want to update state deep down in your component tree
      The state value is either an object or an array
      You need a more predictable, and maintainable state architecture of the application
      </p>
      
        <h1> And, we can Use React.useState when -----</h1>
        <p className='axios'>
      Your application is small
      The state value is a primitive value
      Simple UI state transitions
      Logic is not complicated and can stay within one component
      The useReducer hook is a nice addition to the React library which allows for a  simpler,
       predictable and organized way to update our component’s state and makes sharing data between components a bit easier.
      It lets you optimize the performance of the components that trigger deep updates because now you can easily pass dispatch down instead of typical callbacks.
      And even if you take nothing else from this article, you should at least remember this: that useReducer allows us to define how we update our state value.
      </p>
      </div>
  )
}

