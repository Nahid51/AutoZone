import React, { useEffect, useState } from 'react';
import Navigation from '../Home/Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AllProduct from './AllProduct/AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation />
            <h2>Total Products: {products.length}</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product) => (
                        <Grid item xs={4} sm={4} md={3} key={product._id}>
                            <AllProduct
                                product={product}
                            ></AllProduct>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default AllProducts;