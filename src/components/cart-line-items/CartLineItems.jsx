// import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom";

import ImageComponent from "../image-component/ImageComponent";

function LineItemCard(prop) {
    
    // destructurting
    const { _id, name, price, spec, img } = prop.lineItem.product;
    const { quantity } = prop.lineItem
    console.log("quantity:", quantity)
    console.log("prop.data: ", prop.data)
    
    // const lineItemCountRef = useRef(quantity)
    
    const increment = () => {
        console.log("getting clicked")
        // this.parentNode.querySelector('input[type=number]').stepUp()
    }

    return (
        <>
        <p>{prop.data}</p>


        <div className="card-body">
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                    >
                        <Link to={`/beverages/${_id}`}>
                            <img
                                src={ImageComponent(img)}
                                className="w-100"
                                alt={name}
                            />
                        </Link>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <Link to={`/beverages/${_id}`} style={{ textDecoration: 'none' , color: "black"}}>
                        <p>
                            <strong>{name}</strong>
                        </p>
                        <p>Spec: {spec}</p>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                    >
                        <FontAwesomeIcon
                            icon={icon({ name: "trash", style: "solid" })}
                        />
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                    >
                        <FontAwesomeIcon
                            icon={icon({ name: "heart", style: "regular" })}
                        />
                    </button>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4">
                        <button
                            className="btn btn-primary px-3 me-2"
                            onclick={increment}
                        >
                            <FontAwesomeIcon
                                icon={icon({ name: "minus", style: "solid" })}
                            />
                        </button>

                        <div className="form-outline">
                            <input
                                id={_id}
                                min="0"
                                name="quantity"
                                defaultValue= {quantity}
                                type="number"
                                className="form-control"
                            />
                            <label className="form-label" for={_id}>
                                Quantity: {quantity}
                            </label>
                        </div>

                        <button
                            className="btn btn-primary px-3 ms-2"
                            // onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            onClick={increment}
                        >
                            <FontAwesomeIcon
                                icon={icon({ name: "plus", style: "solid" })}
                            />
                        </button>
                    </div>

                    <p className="text-start text-md-center">
                        <strong>${price.toFixed(2)}</strong>
                    </p>
                </div>
            </div>

            <hr className="my-4" />
        </div>

    </>
    );
}

export default LineItemCard;