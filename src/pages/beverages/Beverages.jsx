import axios from "axios";
import React, { useEffect, useState } from "react";

import BeverageCard from "./beverage-card/BeverageCard";
import BeverageCardPlaceHolder from "./beverage-card/BeverageCardPlaceholder";
import Spinner from "react-bootstrap/Spinner";
import styles from './beverage-card/beverage-card.module.scss'

const baseURL = "http://localhost:8000/api/v1/beverages";

function Beverages({lineItems, setUserCart, setTotalItemsTotal}) {
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
        <BeverageCard key={beverage._id} data={beverage} lineItems={lineItems} setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal} />
    ));

    console.log(beverages)
    return (
        <div className={styles['card-container']}>
            {/* <div className='d-flex flex-row justify-content-center'> */}
                {beverages.length !==0 ? (
                    <>
                        { beverageCards }
                    </>
                ) : (
                    <>
                    <div className="d-flex flex-wrap">
                        {/* <Spinner animation="border" variant="primary" /> */}
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                        <BeverageCardPlaceHolder />
                    </div>
                    </>

                )}
            {/* </div> */}
        </div>     
    );
}

export default Beverages;
