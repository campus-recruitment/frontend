import { Avatar, Toolbar, AppBar, Box, Button } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/full-logo.jpg'
import { UserContext } from '../contexts/userContext';

export default function Header() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)

    const logout = () => {
        setUser({})
        Cookies.remove("token")
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
                    <Button onMouseOver={(e) => e.target.style.backgroundColor = 'red'} sx={{
                        pl: 3, pr: 3,
                        color: "#FFFFFF",
                        textTransform: 'none',
                        backgroundColor: 'red'
                    }} onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}