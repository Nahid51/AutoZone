import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const AddReviews = ({ product }) => {
    const [reviewsData, setReviewsData] = useState({});
    const { user, isLoading, error } = useAuth();
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewsData = { ...reviewsData };
        newReviewsData[field] = value;
        setReviewsData(newReviewsData);

    }

    const handleReviewsButton = e => {
        e.preventDefault();
        const reviwerData = { ...reviewsData, name: user?.displayName, email: user?.email };
        console.log(reviewsData);
        fetch('https://aqueous-garden-63988.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviwerData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div style={{ marginBottom: '2rem' }}>
            <Box sx={{ border: '2px solid gray', borderRadius: 1, width: '30rem', mx: 'auto', mt: 8, textAlign: 'left' }}>
                {success && <Alert severity="success">Review Added Successfully!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                {!isLoading &&
                    <form style={{ padding: '30px' }}>
                        <Typography sx={{ fontSize: 18, fontWeight: 700, my: 3 }}>Please add a opinion about our product and selling system</Typography>
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '80%' }}
                            name="name"
                            label="Name"
                            defaultValue={user?.displayName}
                            type="text"
                            variant="standard" />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '80%' }}
                            name="email"
                            label="Email"
                            defaultValue={user?.email}
                            type="email"
                            variant="standard" />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '80%' }}
                            name="position"
                            label="Reviwer's Position"
                            placeholder="Vehicle Buyer"
                            type="text"
                            variant="standard" />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '80%' }}
                            label="Your Comment"
                            name="comment"
                            multiline
                            rows={4}
                            variant="standard"
                        />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '80%' }}
                            name="point"
                            label="Point 5 out of"
                            type="number"
                            variant="standard" />
                        <br />
                        <Button onClick={handleReviewsButton} sx={{ color: 'white', my: 5 }} variant="contained">Add Review</Button>
                    </form>}
                {isLoading && <CircularProgress color="secondary" />}
            </Box>
        </div>
    );
};

export default AddReviews;