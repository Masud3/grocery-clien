import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = (props) => {
    const { name, price, img } = props.item;
    return (
        <div className="product col-md-3">
            <Card className="container" style={{ width: '18rem', marginTop: '10px' }}>
                <Card.Img variant="top" className="imgStyle" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><h4 className="pdPrice">${price}</h4>
                        <Button style={{ marginLeft: '90px' }} variant="success">
                            <Link  className="btnStyle" to="/orders">Buy Now</Link>
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Admin;