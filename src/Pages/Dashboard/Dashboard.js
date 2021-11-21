import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AllOrder from './AllOrder/AllOrder';
import { Button, CircularProgress } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import logo from '../../Images/logo.png'
import AddProducts from '../AllProducts/AddProducts/AddProducts';
import AdminRoute from '../Login/Login/AdminRoute/AdminRoute';
import AddReviews from '../Home/Reviews/AddReviews.js/AddReviews';
import ManageProduct from './ManageProduct/ManageProduct';

const drawerWidth = 200;

function Dashboard(props) {
    const { user, logOut, admin, isLoading } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <NavLink to="/" >
                <img
                    style={{ margin: '10px' }}
                    src={logo}
                    alt="Company Logo"
                    loading="lazy"
                    width="100px"
                />
            </NavLink>
            <Divider />
            <NavLink style={{ textDecoration: 'none' }} to="/home">
                <Button sx={{ textTransform: 'capitalize' }}>Home</Button>
            </NavLink> <Divider />
            <NavLink style={{ textDecoration: 'none' }} to="/products"><Button sx={{ textTransform: 'capitalize' }}>Order Now</Button></NavLink> <Divider />

            <NavLink style={{ textDecoration: 'none' }} to={`${url}`}>
                <Button sx={{ textTransform: 'capitalize' }}>Manage All Orders</Button>
            </NavLink> <Divider />

            {!admin &&
                <NavLink style={{ textDecoration: 'none' }} to={`${url}/reviews`}>
                    <Button sx={{ textTransform: 'capitalize' }}>Reviews</Button>
                </NavLink>}
            <Divider />
            {admin &&
                <Box>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProducts`}>
                        <Button sx={{ textTransform: 'capitalize' }}>Add a Product</Button>
                    </NavLink> <Divider />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageProduct`}>
                        <Button sx={{ textTransform: 'capitalize' }}>Manage Product</Button>
                    </NavLink> <Divider />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                        <Button sx={{ textTransform: 'capitalize' }}>Make Admin</Button>
                    </NavLink>
                </Box>
            }
            <Divider />
            {user.email ?
                <Button onClick={logOut} variant="contained" sx={{ mt: '2rem' }}>Logout</Button>
                :
                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                    <Button sx={{ mt: '2rem' }} variant="contained">Login</Button>
                </NavLink>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            {!isLoading &&
                <Box Box sx={{ display: 'flex' }
                }>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />
                        <Switch>
                            <Route exact path={path}>
                                <AllOrder></AllOrder>
                            </Route>
                            <Route path={`${path}/reviews`}>
                                <AddReviews></AddReviews>
                            </Route>
                            <AdminRoute path={`${path}/addProducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProduct`}>
                                <ManageProduct></ManageProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Switch>
                    </Box>
                </Box>}
            {isLoading && <CircularProgress color="secondary" />}
        </div>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
