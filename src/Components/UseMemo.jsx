import React, {useState, useMemo} from 'react'

export const UseMemo = () => {
  const [counter, setCounter] = useState(0);
    const memoHook = useMemo(function countMemo(){
        return counter+1;
    },[counter])

  return (
    <div>
      <h1>Q5.What is UseMemo Hook ?</h1>
    <p className='axios'>The useMemoHook accepts a second parameter to declare dependencies. 
      The expensive function will only run when its dependencies have changed.</p>
      <div className='usememo'>
      counter: {memoHook}
      <br />
      <button onClick={()=> setCounter(counter+1)}>Increment</button> <br/> 
      </div>
     </div>
  )
}
