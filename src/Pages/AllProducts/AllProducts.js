import React, { useEffect, useState } from 'react';
import Navigation from '../Home/Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AllProduct from './AllProduct/AllProduct';
import Footer from '../Home/Footer/Footer';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-springs-54557.herokuapp.com/allProducts')
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
            <Footer />
        </div>
    );
};

export default AllProducts;