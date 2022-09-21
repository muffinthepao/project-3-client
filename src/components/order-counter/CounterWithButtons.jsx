import {useState} from "react"
import { Button } from "react-bootstrap";

function CounterWithButtons(props) {

    let [count, setCount] = useState(1)

    let incrementCount = function(e) {
        setCount(count + 1)
        console.log(count)  
    }

    let decrementCount = e => {
        if(count === 0) {
            count = 0
        } else {
            setCount(count-1)
        } 
    }

    return (
        <>
            <button onClick={decrementCount} className="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgRemoveFromCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><rect width="2" height="16" x="19" y="12" fill="#FFF" rx="1" transform="rotate(90 20 20)"></rect></g></svg></button>
            <input aria-label="quantity" name="quantity" type="number" autocomplete="off" min="1" value={count} pattern="\d*" className="inputOrderShow"></input>
            <button onClick={incrementCount} className="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgAddToCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><g fill="#FFF" transform="translate(12 12)"><rect width="2" height="16" x="7" rx="1" transform="rotate(90 8 8)"></rect><rect width="2" height="16" x="7" rx="1"></rect></g></g></svg></button>

            <Button variant="danger">Remove</Button>
            <Button variant="primary">Add to Cart</Button> 
        </>

    )
}

export default CounterWithButtons