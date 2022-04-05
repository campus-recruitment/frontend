import { Typography, Box, Grid, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import '@fontsource/poppins';
import Login from './Login';
import logo from '../../src/assets/logo/home-logo.jpg'

export default function HomePage() {
    return (
        <>
            <Box sx={{
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(to bottom right, #002866, #401E44)'
            }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="logo" width="110px" />
                    </Box> 
                </Toolbar>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item lg={6} md={6}>
                        <Typography sx={{
                            fontFamily: "Poppins",
                            fontSize: '55px',
                            fontWeight: 900,
                            lineHeight: '70px',
                            color: 'white',
                            p: 4,
                            m: 4
                        }}>Training and Placement Cell</Typography>
                        <Typography sx={{
                            fontFamily: "Poppins",
                            fontSize: '16px',
                            fontWeight: 900,
                            color: 'white',
                            ml: 4,
                            pl: 4,
                            mt: -4
                        }}>Keep your placement records organised and stay updated about the campus visitors by registering.</Typography>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <Login />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}