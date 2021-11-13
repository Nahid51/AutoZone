import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../../Home/Products/Product/Product.css'

const ShowProduct = ({ product }) => {
    const { _id, img, name, price, about } = product;
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this file?')
        if (proceed) {
            fetch(`https://aqueous-garden-63988.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSuccess(true);
                        setIsLoading(true);
                        console.log(data);
                    }
                })
        }
    }
    return (
        <div>
            {success && <Alert severity="success">Delete Successfully!</Alert>}
            {!isLoading &&
                <Card className="cardHover" sx={{ mx: 2, my: 5 }}>
                    <CardActionArea sx={{ textAlign: 'left' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt="Product Photo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                Price: &#36;{price}
                            </Typography>
                            <Typography id="pCard" variant="body2" color="text.secondary">
                                Description: {about}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => handleDelete(_id)} variant="contained" sx={{ mr: 1, bgcolor: '#b6191f', color: 'white' }}>Delete</Button>
                        <NavLink to={`/products/${_id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ bgcolor: '#43495d', color: 'white' }}>Update</Button>
                        </NavLink>
                    </CardActions>
                </Card>}
        </div>
    );
};

export default ShowProduct;