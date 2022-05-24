import React, { useEffect, useContext, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Box, Tooltip, useRadioGroup } from '@mui/material';
import '@fontsource/poppins';
import { BorderColor } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

export default function DashboardProfile() {
    const { user } = useContext(UserContext)
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        console.log(user.token)
        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
        .then(data => {
            setFullName(data.student.fullName)
            setEmail(data.student.email)
            setPicture(data.student.picture) 
        })
    }, [])

    return (
        <>
            <Card sx={{ width: 225, mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Tooltip title="Edit Profile" placement="right">
                        <Link to="/edit-profile"><BorderColor sx={{ fontSize: '15px', color: '#401E44', p: 1, cursor: 'pointer' }} /></Link>
                    </Tooltip>
                </Box>

                <CardMedia sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar alt="Remy Sharp" src={picture} />
                </CardMedia>
                <CardContent sx={{ textAlign: 'center' }} >
                    <Typography gutterBottom component="div" sx={{
                        fontFamily: "Poppins",
                        fontSize: '14px',
                        color: '#051846',
                        fontWeight: 900
                    }}>
                        {fullName}
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontSize: '12px',
                        color: '#051846'
                    }}>
                        {email}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}