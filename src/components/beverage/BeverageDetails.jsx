import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeverageCard from "../beverage-card/BeverageCard";

function BeverageDetails(props) {
    const params = useParams()

    return (
        <>
            <h1>particular Beverage Card</h1>
            <h4>{params.beverageId}</h4>
        </>
    )
}

export default BeverageDetails