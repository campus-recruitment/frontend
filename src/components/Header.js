import { Avatar, Toolbar, AppBar, Box } from '@mui/material';
import React from 'react';
import avatar from '../assets/avatar.jpg';
import logo from '../assets/logo/full-logo.jpg'

export default function Header() {
    return (
        <>
            <AppBar position="static" sx={{ background: 'white' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="logo" width="110px" />
                    </Box>
                    <Avatar alt="Remy Sharp" src={avatar} />
                </Toolbar>
            </AppBar>
        </>
    )
}