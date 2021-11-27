import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import reviewLogo from '../../../Images/Group 1368.png'

const Reviews = () => {
    const [reviewCollection, setReviewCollection] = useState([]);
    useEffect(() => {
        fetch('https://rocky-springs-54557.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewCollection(data))
    }, [])
    return (
        <div>
            <h2>Customers Reviews</h2>
            <img
                src={reviewLogo}
                alt="Review Logo"
                loading="lazy"
                width="50px"
                style={{ marginBottom: '10px' }}
            />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {reviewCollection.map((review) => (
                    <Grid item xs={2} sm={4} md={4} key={review._id}>
                        <Review
                            review={review}
                        ></Review>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Reviews;