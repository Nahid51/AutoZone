import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation';

const UpdateProduct = () => {
    const { isLoading } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch(`https://aqueous-garden-63988.herokuapp.com/updateProduct/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    console.log(product);
    const handleUpdateName = e => {
        const updateName = e.target.value;
        const updatePd = { name: updateName, img: product?.img, price: product?.price, about: product?.about };
        setProduct(updatePd)
    }
    const handleUpdateImg = e => {
        const updateImg = e.target.value;
        const updatePd = { name: product?.name, img: updateImg, price: product?.price, about: product?.about };
        setProduct(updatePd)
    }
    const handleUpdatePrice = e => {
        const updatePrice = e.target.value;
        const updatePd = { name: product?.name, img: product?.img, price: updatePrice, about: product?.about };
        setProduct(updatePd)
    }
    const handleUpdateAbout = e => {
        const updateAbout = e.target.value;
        const updatePd = { name: product?.name, img: product?.img, price: product?.price, about: updateAbout };
        setProduct(updatePd)
    }
    const handleButton = e => {
        e.preventDefault();
        fetch(`https://aqueous-garden-63988.herokuapp.com/updateProduct/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSuccess(true);
                    console.log(data)
                }
            })
    }
    return (
        <div>
            <Navigation />
            <Typography sx={{ fontSize: 36 }}>Update Product</Typography>
            {success && <Alert severity="success">Registered Successfully!</Alert>}
            {isLoading &&
                <Box sx={{ border: '2px solid gray', width: '75%', mx: 'auto', borderRadius: 1, m: 3, p: 3 }}>
                    <TextField
                        sx={{ width: '80%' }}
                        onChange={handleUpdateName}
                        type="text"
                        name="name"
                        value={product?.name || ''}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: '80%' }}
                        onChange={handleUpdateImg}
                        type="link"
                        name="img"
                        value={product?.img || ''}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: '80%' }}
                        onChange={handleUpdatePrice}
                        type="number"
                        name="price"
                        value={product?.price || ''}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: '80%' }}
                        onChange={handleUpdateAbout}
                        type="text"
                        name="about"
                        value={product?.about || ''}
                        multiline
                        rows={4}
                        variant="standard"
                    /> <br />
                    <Button onClick={handleButton} variant="contained" sx={{ mt: 3 }}>Update Product</Button>
                </Box>}
            {isLoading && <CircularProgress color="secondary" />}
        </div>
    );
};

export default UpdateProduct;