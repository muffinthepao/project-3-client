import { Card, Placeholder } from "react-bootstrap";
import ImageComponent from "../../../components/image-component/ImageComponent";
import styles from './beverage-card.module.scss';


function BeverageCardPlaceHolder() {
    return (
<div className="d-grid gap-3">
            <div className={styles['child']}>
                <div className="p-2 bg-light border">                     
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
                </div>
            </div>
        </div>
    );
}

export default BeverageCardPlaceHolder;