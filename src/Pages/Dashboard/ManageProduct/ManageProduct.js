import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ShowProduct from './ShowProduct/ShowProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-garden-63988.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Total Products: {products.length}</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product) => (
                        <Grid item xs={4} sm={4} md={3} key={product._id}>
                            <ShowProduct
                                product={product}
                            ></ShowProduct>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default ManageProduct;