import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, img, name, price, about } = product;
    return (
        <div>
            <Card className="cardHover" sx={{ mx: 2, my: 5 }}>
                <CardActionArea sx={{ textAlign: 'left' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
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
                    <NavLink to={`/orders/${_id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ bgcolor: '#43495d', color: 'white' }}>Purchase</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </div>
    );
};

export default Product;