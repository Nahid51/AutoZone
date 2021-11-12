import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../Images/2093110 (1).jpg'
import Navigation from '../Home/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <Card className="my-5 w-50 mx-auto">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className="row">
                </Card.ImgOverlay>
                <NavLink to="/">
                    <Button className="mt-auto" variant="danger">Back to Home</Button>
                </NavLink>
            </Card>
        </div>
    );
};

export default NotFound;