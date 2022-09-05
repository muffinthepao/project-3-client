import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const baseURL = "http://localhost:8000/api/v1/beverages";

function BeverageDetails(props) {
    const params = useParams();
    const [beverage, setBeverage] = useState(null);

    useEffect(() => {
        axios
            .get(`${baseURL}/${params.beverageId}`)
            .then((response) => {
                setBeverage(response.data);
            })
        
        // if (!beverage) return null;
    }, []);

    console.log("beverage: ", beverage);

    return (
        <>
            <h4>Beverage ID: {params.beverageId}</h4>
            <img src={beverage.img} />
            <h1>Name: {beverage.name}</h1>
            <p>Brand: {beverage.brandName}</p>
            <p>Price: {beverage.price}</p>
            <p>Spec: {beverage.spec}</p>
            <p>Stock: {beverage.stock}</p>
            <p>Description: {beverage.description}</p>

        </>
    );
}

export default BeverageDetails;
