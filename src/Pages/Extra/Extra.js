import { Box } from '@mui/system';
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Extra = () => {
    return (
        <Box sx={{ my: '50px' }}>
            <h2>Document will be comming soon.</h2>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Button className="btn btn-danger"> Back to Home</Button>
            </NavLink>
        </Box>
    );
};

export default Extra;