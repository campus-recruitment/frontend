import React from 'react';
import { Button, Grid } from '@mui/material';
import { LightMode } from '@mui/icons-material';
import "@fontsource/poppins"

export default function ThemeHeader() {
    return (
        <>
            <Grid container justifyContent="flex-end" alignItems='center' sx={{ background: 'linear-gradient(to right, #041846, #401E44)', height: '8vh' }}>
                <Grid item>
                    <LightMode sx={{ color: 'white', mr: 4 }} />
                </Grid>
                <Grid item>
                    <Button variant="outlined"
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            mr: 4,
                            textTransform: 'none',
                            fontFamily: "Poppins"}}>Dashboard</Button>
                </Grid>
            </Grid>
        </>
    )
}