import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { Card, Col, Form } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51JvlDNFWGOR9N2hF9jkwX7LWryCVzhjI3SUdlUGYvnjWmJrD4TCSPTHMrgBvM7RYn9zyfZq98AHw5UAx8iHC21SC006FYPdg8U');

const PurchaseOrder = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        fetch(`https://rocky-springs-54557.herokuapp.com/purchaseorder/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [purchaseId])
    return (
        <div>
            <div className="col-12 col-lg-4 mt-5 mx-auto">
                <h3> Pay in $ </h3>
                <Card className="p-3">
                    <Form.Text>Payee Details</Form.Text>
                    <Form>
                        <Form.Group className="my-3" controlId="formHorizontalName">
                            <Col className="mx-auto" sm={10}>
                                <Form.Control
                                    disabled
                                    defaultValue={purchase?.customerName} />
                            </Col>
                        </Form.Group>
                        <Form.Group className="my-3" controlId="formHorizontalContact">
                            <Col className="mx-auto" sm={10}>
                                <Form.Control
                                    disabled
                                    defaultValue={purchase?.contact} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} className="my-3" controlId="formHorizontalEmail">
                            <Col className="mx-auto" sm={10}>
                                <Form.Control
                                    disabled
                                    defaultValue={purchase?.email} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
            <div className="m-3">
                <Form.Text>Card Details</Form.Text>
                {purchase?.productPrice &&
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            purchase={purchase}
                        />
                    </Elements>}
            </div>
        </div>
    );
};

export default PurchaseOrder;