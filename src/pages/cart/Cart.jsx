import axios from "axios";
import React, { useEffect, useState} from "react";


import emptyCartImage from "../cart/empty-cart.png";
import LineItemCard  from "../../components/cart-line-items/CartLineItems";

function Cart({isFetchingCart, userCart, cartTotalPrice, totalItemsInCart}) {      
    
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
                                    <h5 className="mb-0">Cart - {totalItemsInCart} item(s)</h5>
                                </div>

                                {!isFetchingCart ? (
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
                                            <span>{cartTotalPrice.toFixed(2)}</span>
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
                                            <span><strong>{cartTotalPrice.toFixed(2)}</strong></span>
                                        </li>
                                    </ul>

                                    <button type="button" className="btn btn-primary btn-lg btn-block w-100">
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