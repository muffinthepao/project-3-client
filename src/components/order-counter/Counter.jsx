import {useState} from "react"
import { Button } from "react-bootstrap";

function Counter(props) {

    const quantity = props.quantity
    const {updateQuantity} = props.updateQuantity

    const [count, setCount] = useState(quantity)

    const incrementCount = function(e) {
        // setCount(count + 1)
        // console.log(count)  

        //run updateLineItem Api call
    }

    const decrementCount = e => {
        // if(count === 0) {
        //     count = 0
        // } else {
        //     setCount(count-1)
        // } 

        //run updateLineItem Api call
    }


    console.log("quantity: ", quantity)

    return (
        <>
        <div className="d-flex justify-content-center mb-3">
            <button onClick={decrementCount} className="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgRemoveFromCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><rect width="2" height="16" x="19" y="12" fill="#FFF" rx="1" transform="rotate(90 20 20)"></rect></g></svg></button>
            <input onChange={updateQuantity}aria-label="quantity" name="quantity" type="number" autocomplete="off" value={quantity} min="1" pattern="\d*" className="inputOrderShow"></input>
            <button onClick={incrementCount} className="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-testid="SvgAddToCart" height="40" width="40"><title></title><g fill="none"><circle cx="20" cy="20" r="20" fill="#0d6efd"></circle><g fill="#FFF" transform="translate(12 12)"><rect width="2" height="16" x="7" rx="1" transform="rotate(90 8 8)"></rect><rect width="2" height="16" x="7" rx="1"></rect></g></g></svg></button>
        </div>
        </>

    )
}

export default Counter