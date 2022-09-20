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

    console.log("beverage: ", beverage);

    return beverage ? (
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs={5}>
                        <img src={ImageComponent(beverage.img)} alt={beverage.name} className="showImage" />
                    </Col>
                    <Col xs={7}>
                        <h4 className="price"><strong>${beverage.price.toFixed(2)}</strong></h4>
                        <div className="saledetails">
                            <h3>{beverage.name}</h3>

                                <div>
                                    <span>{beverage.spec} | </span>
                                    <span>Brand: {beverage.brandName}</span>
                                </div>

                            <p>Stock Available: {beverage.stock}</p>
                        </div>
                        
                        <div className="counter mt-5">
                            <Counter />
                        </div>

                        <div className="mt-5">

                            <h3 className="description">Description</h3>
                            <p className="details">{beverage.description}</p>

                        </div>

                        
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    ) : null
}

export default BeverageDetails;
