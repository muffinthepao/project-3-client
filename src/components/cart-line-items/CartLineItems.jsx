import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom";

import ImageComponent from "../image-component/ImageComponent";

function LineItemCard({lineItem}) {
    
    // destructurting
    const { _id, name, price, spec, img } = lineItem.product;
    const { quantity } = lineItem
    console.log("quantity:", quantity)
    
    const userData = JSON.parse(localStorage.getItem("user_data")) 
    const baseUsersURL = `http://localhost:8000/api/v1/users/${userData.userId}`;

    const removeFromCart = () => {
        const axiosCall = async () => {
            try {
                await axios.delete(`${baseUsersURL}/cart/lineItem/${lineItem._id}`);
                // navigate(`/beverages/${beverageId}`)
                window.location.reload(false);
                console.log("deleted from cart!")
            } catch (error) {
                console.log(error)
                return
            }
        };

        axiosCall();

    }

    return (
        <>
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
                        onClick={removeFromCart}
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