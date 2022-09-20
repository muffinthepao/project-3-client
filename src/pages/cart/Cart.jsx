import axios from "axios";
import React, { useEffect, useState} from "react";


import emptyCartImage from "../cart/empty-cart.png";
import LineItemCard  from "../../components/cart-line-items/CartLineItems";

function Cart(props) {

    const { userId } = JSON.parse(localStorage.getItem("user_data"))

    const [isFetching, setFetching] = useState(true)
    const [userCart, setUserCart] = useState({})
    const [cartTotal, setCartTotal] = useState(0.00)
    const [itemsTotal, setItemsTotal] = useState(0)

   

    
    useEffect(() => {
        //cart with items
        const userBaseURL = `http://localhost:8000/api/v1/users/${userId}/cart`;
    
        // //empty cart
        // const userBaseURL = `http://localhost:8000/api/v1/users/6320744d7143eaf92da07de2/cart`;
        const getCart = async () => {
    
            try {
                const response = await axios.get(userBaseURL)
                setUserCart(response.data)
                console.log("response.data: ", response.data)


                const cartSum = response.data.lineItems.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue.product.price), 0)
                setCartTotal(cartSum)

                const totalItemsInCart = response.data.lineItems.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity), 0)
                setItemsTotal(totalItemsInCart)
                setFetching(false)
    
            } catch (error) {
                console.log(error)
                return
            }
        }

       getCart().catch(console.error);

    },[]);
        
    
    const lineItemCards = () =>  (
        userCart.lineItems.map((lineItem) => <LineItemCard key={lineItem._id} lineItem={lineItem} />
        // userCart.lineItems.map((lineItem) => <LineItemCard key={lineItem._id}  />
    ))
    
    return (
        <>
            
            <section className="">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {itemsTotal} item(s)</h5>
                                </div>

                                {!isFetching ? (
                                    <>
                                        {lineItemCards()}
                                    </>
                                ) : (
                                    <>
                                    <div>
                                        <img src={emptyCartImage} alt="empty-cart"/>
                                    </div>
                                    </>
                                    
                                )}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>{cartTotal.toFixed(2)}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>FREE</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong><p className="mb-0">(including GST)</p></strong>
                                            </div>
                                            <span><strong>{cartTotal.toFixed(2)}</strong></span>
                                        </li>
                                    </ul>

                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;