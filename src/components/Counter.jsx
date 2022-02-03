import React, { useState } from 'react';

function Counter({initialValue}) {

    const [counter, setCounter] = useState(initialValue);

    const incrementValue = () => {
        return setCounter((prev) => {
            return prev+1
        })
    }

    const decrementValue = () => {
        return setCounter((prev) => {
            return prev-1
        })
    }

    // const doubleValue = () => {
    //     return setCounter((prev) => {
    //         return prev*2
    //     })
    // }

    return <div>
        <p>{ counter}</p>
        <button onClick={incrementValue}>Increment</button>
        <button onClick={decrementValue}>Decrement</button>
        <button onClick={()=>setCounter(counter*2)}>Double</button>
    </div>;
    
}

export default Counter;
