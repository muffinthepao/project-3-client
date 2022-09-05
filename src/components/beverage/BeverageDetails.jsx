import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import axios from "axios";

import ImageComponent from "../image-component/ImageComponent";

const baseURL = "http://localhost:8000/api/v1/beverages";

function BeverageDetails(props) {
    const params = useParams();
    const [beverage, setBeverage] = useState(null);

    useEffect(() => {
        const fetchBeverage = async () => {
            const response = await fetch(`${baseURL}/${params.beverageId}`);
            const data = await response.json();
            setBeverage(data);
        };
        fetchBeverage();
    }, []);

    // useEffect(() => {
    //     axios
    //         .get(`${baseURL}/${params.beverageId}`)
    //         .then((response) => {
    //             setBeverage(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     // if (!beverage) return null;
    // }, []);

    // useEffect(async () => {
    //    await axios
    //         .get(`${baseURL}/${params.beverageId}`)
    //         .then((response) => {
    //             setBeverage(response.data);
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })

    //     // if (!beverage) return null;
    // },[]);

    // useEffect(async () => {
    //     const response = await axios.get(`${baseURL}/${params.beverageId}`);

    //     setBeverage(response.data)

    //     // if (!beverage) return null;
    // },[]);

    console.log("beverage: ", beverage);

    return (
        <>
            <div>
                <h4>Beverage ID: {params.beverageId}</h4>
                <img src={ImageComponent(beverage.img)} />
                <h1>Name: {beverage.name}</h1>
                <p>Brand: {beverage.brandName}</p>
                <p>Price: {beverage.price}</p>
                <p>Spec: {beverage.spec}</p>
                <p>Stock: {beverage.stock}</p>
                <p>Description: {beverage.description}</p>
                <Button variant="primary">Add to Cart</Button>
            </div>
        </>
    );
}

export default BeverageDetails;
