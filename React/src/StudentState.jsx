import React, { useState } from 'react'

const StudentState = () => {
  
  const [count, setCount] = useState(0)
  
  const increament = () => {
    setCount(count + 4);
  }

  const decreament = () => {
    setCount(count -10);
  }
  
  return (
    <div>
      <div>
       <h2>{count}</h2>
      </div>

      <div>
        <button onClick={increament}>DoIncreament</button>
        <br/><br/>
        <button onClick={decreament}>DoDecreament</button>
      </div>
    </div>
  )
}

export default StudentState