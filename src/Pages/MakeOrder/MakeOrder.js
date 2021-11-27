import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation';

const MakeOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [productDetails, setProductDetails] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const productName = singleProduct?.name;
    const productPrice = singleProduct?.price;
    let today = new Date().toLocaleDateString();

    const primaryInfo = { customerName: user?.displayName, email: user.email, contact: '', address: '' };
    const [orderInfo, setOrderInfo] = useState(primaryInfo);

    // loaded data from database
    useEffect(() => {
        fetch('https://rocky-springs-54557.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    // compare and find single product
    useEffect(() => {
        const foundProduct = productDetails.find(product => product?._id === id);
        setSingleProduct(foundProduct);
    }, [id, productDetails]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handlePurchaseButton = e => {
        e.preventDefault();
        // collect data from client
        const orderDetails = {
            ...orderInfo,
            productName,
            productPrice,
            today
        }
        console.log(orderDetails);
        // sent data to the server
        fetch('https://rocky-springs-54557.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPurchaseSuccess(true)
                }
            })
    }

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className='my-5'>
                            <Card className='mx-auto'>
                                <Card.Img variant="top" src={singleProduct?.img} />
                                <Card.Body>
                                    <Card.Title>Name: {singleProduct?.name}</Card.Title>
                                    <div>
                                        <Card.Text className="text-dark my-2 fs-6 fw-bold">Price: &#36;{singleProduct?.price}</Card.Text>
                                    </div>
                                    <Card.Text style={{ textAlign: 'justify' }}><b>Description: {singleProduct?.about}</b> </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5">
                        <h2 className="font2 color2" >Love this car?</h2>
                        <h1 className="fw-bold mb-3">Purchase Now</h1>
                        <Card>
                            {purchaseSuccess && <Alert severity="success">Add to Cart Successfully! Go to Dashboard for Purchase.</Alert>}
                            <Form>
                                <Form.Group as={Col} className="my-3" controlId="formHorizontalName">
                                    <Col className="mx-auto" sm={10}>
                                        <Form.Control
                                            disabled
                                            defaultValue={singleProduct?.name} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="my-3" controlId="formHorizontalName">
                                    <Col className="mx-auto" sm={10}>
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            name="customerName"
                                            defaultValue={user?.displayName}
                                            placeholder="Name"
                                            required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="my-3" controlId="formHorizontalEmail">
                                    <Col className="mx-auto" sm={10}>
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            name="email"
                                            type="text"
                                            defaultValue={user?.email}
                                            required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="my-3" controlId="formHorizontalContact">
                                    <Col className="mx-auto" sm={10}>
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            name="contact"
                                            type="number"
                                            placeholder="Contact Number"
                                            required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="my-3" controlId="formHorizontalAddress">
                                    <Col className="mx-auto" sm={10}>
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            name="address"
                                            type="text"
                                            placeholder="Address"
                                            required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="my-3" controlId="formHorizontalPrice">
                                    <Col className="mx-auto" sm={10}>
                                        <Form.Control
                                            disabled
                                            defaultValue={singleProduct?.price} />
                                    </Col>
                                </Form.Group>
                                <Button onClick={handlePurchaseButton} className="btn btn-danger mb-3">Add to Cart</Button>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MakeOrder;