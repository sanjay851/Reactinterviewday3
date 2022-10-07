import React from 'react'
export const UseState = () => {
    const[counter,setCounter] = React.useState(0);
  const handleClick = ()=>
  {
    setCounter(counter +1)
  }
  const handleClick1 = ()=>
  {
    setCounter(counter -1)
  }
  return (
    <>
    <div className="btn">
      <div className="count1">Q1.What is UseState Hook ?(git init)</div>
      <p className="ans">Ans:useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
    <h1 className="count">{counter}</h1>
    <button className="btn2" onClick={handleClick}>increment</button>
    <br/>
    <button className="btn2" onClick={handleClick1}>decrement</button>
    </div>
   
    </>
  )
}
