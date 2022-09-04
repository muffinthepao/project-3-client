import axios from "axios";
import React, { useEffect, useState } from "react";

import BeverageCard from "../beverage-card/BeverageCard";
import Spinner from "react-bootstrap/Spinner";

const baseURL = "http://localhost:8000/api/v1/beverages";

function Beverages() {
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        // //fetch method
        // const getBeverages = async () => {
        //     const response = await fetch('http://localhost:8000/api/v1/beverages')
        //     const data = await response.json()

        //     setBeverages(data)
        //     console.log(data)
        // }
        // getBeverages();

        axios.get(baseURL).then((response) => {
            setBeverages(response.data);
        });

        if (!beverages) return null;
    }, []);

    const beverageCards = beverages.map((beverage) => (
        <BeverageCard key={beverage._id} data={beverage} />
    ));

    return (
        <>
            {beverages ? (
                <>
                    {beverageCards}
                </>
            ) : (
                <Spinner animation="border" variant="primary" />
            )}
        </>
    );
}

export default Beverages;
