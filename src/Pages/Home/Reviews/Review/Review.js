import { Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const Review = ({ review }) => {
    const { name, position, comment, point } = review;
    const rating = Number(point)
    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={4}>
                                    <PersonIcon sx={{ fontSize: 40 }} />
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Typography variant="body2" color="text.secondary">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {position}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography gutterBottom sx={{ fontSize: 14, mt: 3 }}
                            component="div">
                            {comment}
                        </Typography>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Rating name="read-only" defaultValue={rating} readOnly />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
};

export default Review;