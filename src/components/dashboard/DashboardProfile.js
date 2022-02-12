import React from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Box } from '@mui/material';
import '@fontsource/poppins';
import avatar from '../../assets/avatar.jpg';
import { BorderColor } from '@mui/icons-material';

export default function DashboardProfile() {
    return (
        <>
            <Card sx={{ maxWidth: 225, mt: 2 }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <BorderColor sx={{fontSize: '15px', color: '#FF6F3F', p: 1, cursor: 'pointer'}} />
                </Box>

                <CardMedia sx={{display: 'flex', justifyContent: 'center'}}>
                    <Avatar alt="Remy Sharp" src={avatar} />
                </CardMedia>
                <CardContent sx={{textAlign: 'center'}} >
                    <Typography gutterBottom component="div" sx={{
                        fontFamily: "Poppins",
                        fontSize: '14px',
                        color: '#051846',
                        fontWeight: 900
                    }}>
                        John Doe
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontSize: '12px',
                        color: '#051846'
                    }}>
                        johndoe123@gmail.com
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}