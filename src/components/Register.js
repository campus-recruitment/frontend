import React, { useContext, useState } from 'react';
import { TextField, Paper, Box, Button, Typography } from '@mui/material';
import { store } from 'react-notifications-component';
// import { useHistory } from "react-router-dom";
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import Cookies from 'js-cookie';

export default function Register() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { setUser } = useContext(UserContext)

    // const notifyPopup = () => {
    //     store.addNotification({
    //       title: "Success!",
    //       message: "You have been Logged in!",
    //       type: "success",
    //       background: "green",
    //       insert: "bottom",
    //       container: "bottom-right",
    //       animationIn: ["animate__animated", "animate__fadeIn"],
    //       animationOut: ["animate__animated", "animate__fadeOut"],
    //       dismiss: {
    //         duration: 3000,
    //         onScreen: true,
    //       },
    //     });
    //   };

    const handleRegister = () => {
        if (password === confirmPassword) {
            console.log('hello')
            fetch("http://localhost:5000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    password
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
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
                                // notifyPopup();
                                // if(Object.keys(data).find(ele => ele.result == "token")) {
                                //     localStorage.setItem("token", data.result.token)
                                // }
                                console.log('hello...')
                                setUser(data.result)
                                navigate('/switch')
                                console.log(data.result)
                                const inTwoHours = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                                Cookies.set("token", JSON.stringify(data.result), { expires: inTwoHours })
                            })
                    }
                    else prompt(data.message)
                })
        }
    }

    return (
        <>
            <Paper variant="outlined" sx={{ width: 350, mt: 4 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
                    <TextField sx={{
                        mb: 2
                    }} onChange={(e) => setFullName(e.target.value)} id="outlined-basic" label="Your Full Name" variant="outlined" required size="small" />
                    <TextField sx={{
                        mb: 2
                    }} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Your Email" variant="outlined" required size="small" />
                    <TextField sx={{
                        mb: 2
                    }} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="password" label="Password" variant="outlined" required size="small" />
                    <TextField sx={{
                        mb: 2
                    }} onChange={(e) => setConfirmPassword(e.target.value)} id="outlined-basic" type="password" label="Confirm Password" variant="outlined" required size="small" />
                    <Button variant="contained"
                       onMouseOver={(e) => e.target.style.backgroundColor = '#041846'}
                       sx={{
                           color: 'white',
                           backgroundColor: '#041846',
                           textTransform: 'none',
                           fontFamily: "Poppins"}} onClick={handleRegister}>Register</Button>
                    <Typography sx={{ textAlign: 'right', mt: 2,fontFamily: "Poppins" }} variant="caption">Already have an account? <Link to="/login">Login here.</Link></Typography>
                </Box>
            </Paper>
        </>
    )
}