import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zSR382m/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ textAlign: 'left' }}>
                        <h2>---Get Your Dream Car</h2>
                        <h1>Mercedes Benz S Class</h1>
                        <div className="bannerWrite d-flex">
                            <p className="me-5">&#36;109,800</p><p>Fresh Style<br />High Performance</p>
                        </div>
                        <NavLink to="/products" style={{ textDecoration: 'none' }}>
                            <Button className="btn btn-danger border-0">Explore</Button>
                        </NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/wsgySwk/bannerimg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ textAlign: 'left' }}>
                        <h2>---Get Your Dream Car</h2>
                        <h1>Ford Mustang Coilover Evolution</h1>
                        <div className="bannerWrite d-flex">
                            <p className="me-5">&#36;136,210</p><p>Fresh Style<br />High Performance</p>
                        </div>
                        <NavLink to="/products" style={{ textDecoration: 'none' }}>
                            <Button className="btn btn-danger border-0">Explore</Button>
                        </NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/CKR2GTf/banner3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ textAlign: 'left' }}>
                        <h2>---Get Your Dream Car</h2>
                        <h1>Audi R8 V10 Performance 2019</h1>
                        <div className="bannerWrite d-flex">
                            <p className="me-5">&#36;143,000</p><p>Fresh Style<br />High Performance</p>
                        </div>
                        <NavLink to="/products" style={{ textDecoration: 'none' }}>
                            <Button className="btn btn-danger border-0">Explore</Button>
                        </NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;