import React, { useContext, useState } from 'react';
import { TextField, Paper, Box, Button, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import Cookies from 'js-cookie';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleLogin = () => {
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    setUser(data.result)
                    // localStorage.setItem("token", data.result.token)
                    const inTwoHours = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                    Cookies.set("token", JSON.stringify(data.result), { expires: inTwoHours })
                    navigate('/switch')
                    console.log(data.result) 
                } else {
                    prompt(data.message)
                }
            })
    }

    return (
        <>
            <Paper variant="outlined" sx={{ width: 350 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>

                    <TextField sx={{
                        mb: 2,
                        fontFamily: "Poppins"
                    }} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Your Email" variant="outlined" required size="small" />
                    <TextField sx={{
                        mb: 2,
                        fontFamily: "Poppins"
                    }} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="password" label="Password" variant="outlined" required size="small" />

                    <Button variant="contained"    onMouseOver={(e) => e.target.style.backgroundColor = '#041846'}
                                    sx={{
                                        color: 'white',
                                        backgroundColor: '#041846',
                                        textTransform: 'none',
                                        fontFamily: "Poppins"
                                     }} onClick={handleLogin}>Login</Button>
                    <Typography sx={{ textAlign: 'right', mt: 2,fontFamily: "Poppins"}} variant="caption">Don't have an account? <Link to="/">Register here.</Link></Typography>
                </Box>
            </Paper>
        </>
    )
}