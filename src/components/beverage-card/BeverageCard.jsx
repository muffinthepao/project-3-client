import React from "react";
// import Button from 'react-bootstrap/Button';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ImageComponent from "../image-component/ImageComponent";


function BeverageCard(props) {
    //destructurting
    const { _id, name, brandName, price, stock, description, spec, img } = props.data

    return (
        <>  
            <Link to={`/beverages/${_id}`}>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={ImageComponent(img)} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
}

export default BeverageCard;
