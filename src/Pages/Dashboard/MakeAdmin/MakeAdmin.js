import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { error, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleCreateAdmin = e => {
        e.preventDefault();
        const user = { email };
        fetch('https://aqueous-garden-63988.herokuapp.com/customers/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setMessage(true);
                }
            })
    }
    return (
        <div>
            <Typography sx={{ fontSize: 24, fontWeight: 700, my: 5 }}>Make an Admin</Typography>
            {!isLoading &&
                <Box sx={{ border: '2px solid gray', borderRadius: 1, width: '50%', mx: 'auto', p: 5 }}>
                    <TextField
                        sx={{ width: '80%' }}
                        onBlur={handleOnBlur}
                        id="standard-basic"
                        label="Email"
                        type="email"
                        variant="standard"
                    />
                    <br />
                    <Button onClick={handleCreateAdmin} sx={{ m: 5 }} variant="contained">Make Admin</Button>
                    {message && <Alert severity="success">Make Admin Successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>}
            {isLoading && <CircularProgress color="secondary" />}
        </div>
    );
};

export default MakeAdmin;