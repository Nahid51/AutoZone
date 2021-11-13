import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Product from './Product/Product';
import logo2 from '../../../Images/logo2.png'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-garden-63988.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Image className="mt-5" src={logo2} width="100px" />
            <h2>Our Cars Collection</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product) => (
                        <Grid item xs={4} sm={4} md={3} key={product._id}>
                            <Product
                                product={product}
                            ></Product>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <NavLink to="/products" style={{ textDecoration: 'none' }}>
                <Button className="btn btn-danger mb-5">Explore More Cars</Button>
            </NavLink>
        </div>
    );
};

export default Products;