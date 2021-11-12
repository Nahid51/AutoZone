import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, userRegistration, isLoading, error, googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }

    const handleRegisterButton = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match.')
            return
        }
        userRegistration(loginData?.email, loginData?.password, loginData.name);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }

    return (
        <div style={{ marginBottom: '2rem' }}>
            <Navigation />
            <Box sx={{ border: '2px solid gray', borderRadius: 1, width: '30rem', mx: 'auto', mt: 8, textAlign: 'left' }}>
                {user?.email && <Alert severity="success">Registered Successfully!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                {!isLoading &&
                    <form style={{ padding: '30px' }}>
                        <Typography sx={{ fontSize: 18, fontWeight: 700 }}>Create an account</Typography>
                        <TextField onBlur={handleOnBlur} id="standard-basic" name="name" label="Name" type="text" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} id="standard-basic" name="email" label="Email" type="email" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} id="standard-basic" name="password" label="Password" type="password" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} id="standard-basic" name="password2" label="Re-password" type="password" variant="standard" />
                        <br />
                        <Button onClick={handleRegisterButton} sx={{ color: 'white', my: 5 }} variant="contained">Create an account</Button>
                        <Typography>Already have an account?<NavLink to="/login">Login</NavLink></Typography>
                    </form>}
                {isLoading && <CircularProgress color="secondary" />}
            </Box>
            <Typography>--------------------or-------------------</Typography>
            <Button onClick={handleGoogleSignIn} sx={{ color: 'white', my: 2 }} variant="contained">Continue with Google</Button>
        </div>
    );
};

export default Register;