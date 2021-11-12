import React from 'react';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#20262f' }} variant="dark">
                <Container>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Company Logo"
                            loading="lazy"
                            width="100px"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }} to="/">Home</NavLink>
                            <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }} to="/products">Products</NavLink>
                        </Nav>

                        {user.email ?
                            <Box>
                                <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }} to="/dashboard">Dashboard</NavLink>
                                <Button onClick={logOut} sx={{ color: 'white' }} className="btn-grad">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: 'white' }} className="btn-grad">Login</Button>
                            </NavLink>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;