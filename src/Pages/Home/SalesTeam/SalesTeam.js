import React from 'react';
import { Card, CardGroup, Col, Image, Row } from 'react-bootstrap';
import logo2 from '../../../Images/logo2.png'

const SalesTeam = () => {
    return (
        <div>
            <Image className="mt-5" src={logo2} width="100px" />
            <h2>Our Sales Team</h2>
            <CardGroup className="container my-5">
                <Row xs={2} md={4} className="g-4">
                    <Col>
                        <Card className="cardHover border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/ry4QqtL/t01.jpg" />
                            <Card.Body>
                                <Card.Title>Alex Leeman</Card.Title>
                                <Card.Text>
                                    Director
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardHover border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/rGjQTL2/t02.jpg" />
                            <Card.Body>
                                <Card.Title>Diago Johnson</Card.Title>
                                <Card.Text>
                                    Sales Manager
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardHover border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/JsZrqy3/t03.jpg" />
                            <Card.Body>
                                <Card.Title>Alex Carry</Card.Title>
                                <Card.Text>
                                    Co-Founder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardHover border-0">
                            <Card.Img variant="top" src="https://i.ibb.co/dPhpzWL/t04.jpg" />
                            <Card.Body>
                                <Card.Title>Willam Henry</Card.Title>
                                <Card.Text>
                                    Marketing
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>
        </div>
    );
};

export default SalesTeam;