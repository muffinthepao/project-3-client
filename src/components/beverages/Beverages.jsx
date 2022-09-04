import React, {useEffect, useState} from 'react';
import BeverageCard from '../beverage-card/BeverageCard';
import axios from 'axios';

const baseURL = "http://localhost:8000/api/v1/beverages"

function Beverages () {
    const [beverages, setBeverages] = useState([])

    useEffect(() => {
        // //fetch method
        // const getBeverages = async () => {
        //     const response = await fetch('http://localhost:8000/api/v1/beverages')
        //     const data = await response.json()

        //     setBeverages(data)
        //     console.log(data)
        // }


        axios.get(baseURL).then((response) => {
            setBeverages(response.data)
        })

        console.log("beverages:", beverages)

        if(!beverages) return null
        
    },[])
    return (
        <>
            <BeverageCard />
        </>
    )
}

export default Beverages