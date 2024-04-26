import React, { useState } from 'react';
import "./counter.css"

function Counter() {
    const [count, b] = useState(0);

    function increment() {
        b(function (num) {
            return (num += 1)
        })
    }

    function decrement() {
        b(function (num) {
            if (num > 0) {
                return (num -= 1);
            } else {
                return (num = 0);
            }
        })
    }


    function changeColor() {
        if (count == 0) {
            return "black"
        } else if (count > 0) {
            return "green"
        }else
            return "red"
    }
    
    return (
        <div>
            <h1>Counter</h1>

            <div className="buttons">
                <button onClick={decrement}>Decrease</button>
                <p style={{ color: changeColor() }}>{count}</p>
                <button onClick={increment}>Increase</button>
            </div>
        </div>

    )
}

export default Counter
