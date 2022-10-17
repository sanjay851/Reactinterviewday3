import React ,{ useEffect, useState }  from 'react'

export const Effect = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
      console.log("did mount");
      return () =>{
        console.log("like unmount");
      }
  },[])

  useEffect(() =>{
      console.log("didupdate",count);
  },[count])

  return (
    <div>
       <h1>Q3.What is useEffect Hook ?(Implementation)?</h1>
       <p  className='axios'>The useEffect () method to replace class component lifecycles. useEffect Parameters useEffect hook takes a function as the first argument and a set of dependencies as the second argument.
          React.useEffect (function, [dependencies]).</p>
    <div className='reduce'>
    <h2>{count}</h2>
    <button onClick={()=> setCount(count + 1)}> Click Me </button>
    <button onClick={()=> setCount(count - 1)}> Click Me </button>
    </div>
    
    </div>
  )
}

