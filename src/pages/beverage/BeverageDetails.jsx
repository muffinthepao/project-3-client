import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './beverage-details.scss';

import axios from "axios";

import ImageComponent from "../../components/image-component/ImageComponent";
import Counter from "../../components/order-counter/Counter";

const baseURL = "http://localhost:8000/api/v1/beverages";

function BeverageDetails(props) {
    
    const {beverageId} = useParams();
    const [beverage, setBeverage] = useState(null);

    useEffect(() => {
        const axiosCall = async () => {
          const response = await axios.get(`${baseURL}/${beverageId}`)
          setBeverage(response.data)
        }
        
        axiosCall()
  
       },[beverageId]);

    // useEffect(() => {
    //     const fetchBeverage = async () => {
    //         const response = await fetch(`${baseURL}/${params.beverageId}`);
    //         const data = await response.json();
    //         setBeverage(data);
    //     };
    //     fetchBeverage();
    // }, []);

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
    //     const response = await axios.get(`${baseURL}/${params.beverageId}`);

    //     setBeverage(response.data)

    //     // if (!beverage) return null;
    // },[]);

    console.log("beverage: ", beverage);

    return beverage ? (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={ImageComponent(beverage.img)} alt={beverage.name} className="showImage" />
                    </Col>
                    <Col>
                        <h4 className="price">${beverage.price.toFixed(2)}</h4>
                        <div className="saledetails">
                            <p>{beverage.name}</p>
                                <div>
                                    <span>{beverage.spec} | </span>
                                    <span>Brand: {beverage.brandName}</span>
                                </div>
                            <p>Stock Available: {beverage.stock}</p>
                        </div>
                        
                        <div className="counter">
                            <Counter />
                        </div>

                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="description">Description</h3>
                        <p className="details">{beverage.description}</p>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    ) : null
}

export default BeverageDetails;
