import {useState} from "react"
import './orderCounter.css'

function Counter() {
    // let countState = useState(0)
    // let count = countState[0]
    // let setCount = countState[1]

    // count -> current state value
    // setCount -> func used to update the count state
    let [count, setCount] = useState(0)

    // React will not be updated of the state change
    // if we set the state value manually
    // So do not update state manually
    // count = 10 -> NO NO

    let incrementCount = function(e) {
        setCount(count + 1)

        // other logic that depends on value of count
        // > application break
        console.log(count)
    }

    let decrementCount = e => {
        setCount(count-1)
    }

    return (
        <>
            <span>Current Count: {count}</span>
            <section>
                <button onClick={incrementCount}>+</button>
                <button onClick={decrementCount}>-</button>
            </section>
        </>
    )
}

export default Counter
