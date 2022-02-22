import { Avatar, Toolbar, AppBar, Box, Button } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/full-logo.jpg'
import { UserContext } from '../contexts/userContext';

export default function Header() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)

    const logout = () => {
        setUser({})
        navigate("/login")
    }
    
    return (
        <>
            <AppBar position="static" sx={{ background: 'white' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="logo" width="110px" />
                    </Box>
                    {/* <Avatar alt="Remy Sharp" src={avatar} /> */}
                    <Button onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}