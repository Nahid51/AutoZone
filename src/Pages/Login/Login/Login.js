import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error, googleSignIn } = useAuth();

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

    const handleLoginButton = e => {
        e.preventDefault();
        loginUser(loginData?.email, loginData?.password, location, history)
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }

    return (
        <div style={{ marginBottom: '2rem' }}>
            <Navigation />
            <Box sx={{ border: '2px solid gray', borderRadius: 1, width: '30rem', mx: 'auto', mt: 8, textAlign: 'left' }}>
                {user?.email && <Alert severity="success">Login Successfully!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                {!isLoading &&
                    <form style={{ padding: '30px' }}>
                        <Typography sx={{ fontSize: 18, fontWeight: 700 }}>Login Now</Typography>
                        <TextField onBlur={handleOnBlur} id="standard-basic" name="email" label="Email" type="email" variant="standard" />
                        <br />
                        <TextField onBlur={handleOnBlur} id="standard-basic" name="password" label="Password" type="password" variant="standard" />
                        <br />
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <Button onClick={handleLoginButton} sx={{ color: 'white', my: 5 }} variant="contained">Login</Button>
                        </NavLink>
                        <Typography>Don't have an account?<NavLink to="/register">Create an Account</NavLink></Typography>
                    </form>}
                {isLoading && <CircularProgress color="secondary" />}
            </Box>
            <Typography>--------------------or-------------------</Typography>
            <Button onClick={handleGoogleSignIn} sx={{ color: 'white', my: 2 }} variant="contained">Continue with Google</Button>
        </div>
    );
};

export default Login;