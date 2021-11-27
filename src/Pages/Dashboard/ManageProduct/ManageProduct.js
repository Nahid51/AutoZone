import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import ShowProduct from './ShowProduct/ShowProduct';

const ManageProduct = () => {
    const { isLoading } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-springs-54557.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Total Products: {products.length}</h2>
            {!isLoading &&
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
                </Box>}
            {isLoading && <CircularProgress color="secondary" />}
        </div>
    );
};

export default ManageProduct;