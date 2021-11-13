import { Alert, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddProducts = () => {
    const [productData, setProductData] = useState({});
    const [message, setMessage] = useState(false);
    const { error, isLoading } = useAuth();

    const handleAddProduct = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        console.log(newProductData);
        setProductData(newProductData);
    }
    const handleButton = e => {
        e.preventDefault();
        fetch('https://aqueous-garden-63988.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                setMessage(true);
                console.log(data);
            })
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography gutterBottom sx={{ fontSize: 18, fontWeight: 700 }}>Add Products</Typography>
                    {message && <Alert severity="success">Product added Successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                    {!isLoading &&
                        <Box sx={{ border: '2px solid gray', width: '75%', mx: 'auto', borderRadius: 1, m: 3, p: 3 }}>
                            <TextField
                                sx={{ width: '80%' }}
                                onBlur={handleAddProduct}
                                id="standard-basic"
                                label="Product Name"
                                name="name"
                                type="text"
                                variant="standard" /> <br />
                            <TextField
                                sx={{ width: '80%' }}
                                onBlur={handleAddProduct}
                                id="standard-basic"
                                label="Product Image"
                                name="img"
                                type="link"
                                variant="standard" /> <br />
                            <TextField
                                sx={{ width: '80%' }}
                                onBlur={handleAddProduct}
                                label="Product Price"
                                name="price"
                                type="number"
                                id="standard-basic"
                                variant="standard" /> <br />
                            <TextField
                                sx={{ width: '80%' }}
                                onBlur={handleAddProduct}
                                id="standard-multiline-static"
                                label="Product Description"
                                name="about"
                                type="text"
                                multiline
                                rows={4}
                                variant="standard"
                            /> <br />
                            <Button onClick={handleButton} className="btn btn-danger my-5">Add Product</Button>
                        </Box>}
                    {isLoading && <CircularProgress color="secondary" />}
                </Grid>
            </Grid>
        </div>
    );
};

export default AddProducts;