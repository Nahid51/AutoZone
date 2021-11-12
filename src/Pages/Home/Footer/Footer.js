import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import footerBg from '../../../Images/footerbg.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/system';
import logo from '../../../Images/logo.png'

const footerBackground = {
    background: `url(${footerBg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}

const Footer = () => {
    return (
        <div>
            <Box style={footerBackground} sx={{ mt: 8, pl: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6} >
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    loading="lazy"
                                    width="150px"
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ mt: 5 }} >
                                <Link to="/extra"><FacebookIcon sx={{ color: "#5ce7ed", mr: 2 }} /></Link>
                                <Link to="/extra"><GoogleIcon sx={{ color: "#5ce7ed", mr: 2 }} /></Link>
                                <Link to="/extra"><TwitterIcon sx={{ color: "#5ce7ed" }} /></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6} sx={{ textAlign: 'left' }}>
                                <Typography sx={{ color: 'White', fontSize: 18, fontWeight: 'bold', mb: 3 }}>USEFUL LINKS</Typography>
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>About Us</Button></Link>
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>Our Services</Button></Link>
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>Information</Button></Link>
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>Privacy and Policy</Button></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6} sx={{ textAlign: 'left' }}>
                                <Typography sx={{ color: 'White', fontSize: 18, fontWeight: 'bold', mb: 3 }}>OUR TERMS
                                </Typography>
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>Support</Button></Link><br />
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>Contact</Button></Link><br />
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>Typography</Button></Link><br />
                                <Link to="/extra" style={{ textDecoration: "none" }}><Button style={{ color: 'White', fontSize: 12 }}>FAQ</Button></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6} sx={{ textAlign: 'left' }}>
                                <Typography sx={{ color: 'White', fontSize: 18, fontWeight: 'bold', mb: 3 }}>SHOWROOM</Typography>
                                <Typography sx={{ color: 'White', fontSize: 14, my: 3 }}>
                                    USA, Auto, King St. 665087 <br />
                                    Phone: +15123654789 <br />
                                    E-mail: info@example.com</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography sx={{ mt: 5, color: 'White', fontSize: 14 }}>&copy;2021 by AutoMart.com. Proudly created by myself.</Typography>
            </Box>
        </div>
    );
};

export default Footer;