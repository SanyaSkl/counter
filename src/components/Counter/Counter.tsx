import React, {useState} from 'react';
import './Counter.css'

export const Counter = () => {
    const[count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    // const disableInc = () => {
    //
    // }

    return (
        <div className="counterBox">
            <h1 className="scoreboard">{count}</h1>
            <div className="buttonBox">
            <button className="button" onClick={incrementCount}>Inc</button>
            <button className="button" onClick={incrementCount}>Reset</button>
            </div>
        </div>
    );
};

