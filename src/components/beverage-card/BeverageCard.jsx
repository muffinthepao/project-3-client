import React from "react";
// import Button from 'react-bootstrap/Button';
import { Card, Button, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

import ImageComponent from "../image-component/ImageComponent";

function BeverageCard(props) {
    //destructurting
    const { _id, name, brandName, price, stock, description, spec, img } =
        props.data;

    return (
        <>
            {props.data ? (
                <Link to={`/beverages/${_id}`}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={ImageComponent(img)} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Link>
            ) : (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={ImageComponent()} />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                        <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
            )}

        </>
    );
}

export default BeverageCard;
