import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../../Home/Navigation/Navigation';

const AddProducts = () => {
    const [productData, setProductData] = useState({});
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
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography gutterBottom sx={{ fontSize: 18, fontWeight: 700 }}>Add Products</Typography>
                    <Box sx={{ border: '2px solid gray', width: '75%', mx: 'auto', borderRadius: 1 }}>
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
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddProducts;