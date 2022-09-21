import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./beverage-details.scss";

import axios from "axios";

import ImageComponent from "../../components/image-component/ImageComponent";

const userData = JSON.parse(localStorage.getItem("user_data")) 
const baseBeveragesURL = "http://localhost:8000/api/v1/beverages";
const baseUsersURL = `http://localhost:8000/api/v1/users/${userData?.userId}`;


function BeverageDetails({ lineItems }) {
    const navigate = useNavigate()
    const { beverageId } = useParams();
    const [beverage, setBeverage] = useState(null);

    useEffect(() => {
        const axiosCall = async () => {
            const response = await axios.get(`${baseBeveragesURL}/${beverageId}`);
            setBeverage(response.data);
        };

        axiosCall();
    }, [beverageId]);

    const addToCart = () => {
        const userData = JSON.parse(localStorage.getItem("user_data")) 
        const baseUsersURL = `http://localhost:8000/api/v1/users/${userData.userId}`;

        const axiosCall = async () => {
            try {
                await axios.post(`${baseUsersURL}/cart`, 
                {
                    beverageId,
                    quantity: 1
                });


                console.log("added to cart!")
            } catch (error) {
                console.log(error)
                return
            }
        };

        axiosCall();

    }

    return beverage ? (
        <>
            <Container className="d-flex">
                <Row className="mt-5">
                    <Col xs={5}>
                        <div className="d-flex justify-content-center">
                            <img
                                src={ImageComponent(beverage.img)}
                                alt={beverage.name}
                                className="showImage"
                            />
                        </div>
                    </Col>
                    <Col xs={7}>
                        <h4 className="price">
                            <strong>${beverage.price.toFixed(2)}</strong>
                        </h4>
                        <div className="saledetails">
                            <h3>{beverage.name}</h3>

                            <div>
                                <span>{beverage.spec} | </span>
                                <span>Brand: {beverage.brandName}</span>
                            </div>

                            <p>Stock Available: {beverage.stock}</p>
                        </div>

                        <div className="counter mt-5">
                            <Button onClick={addToCart} variant="primary">Add to Cart</Button>
                            {/* 
                            {lineItemInCart ? (
                                <Button variant="danger">Remove</Button>
                            ) : (
                                ""
                            )} */}
                        </div>

                        <div className="mt-5">
                            <h3 className="description">Description</h3>
                            <p className="details">{beverage.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    ) : null;
}

export default BeverageDetails;
