import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, Box } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import '@fontsource/poppins';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import { Link } from 'react-router-dom';

export default function VisitorsForm() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authorityName, setAuthorityName] = useState("");
    const [authorityPosition, setAuthorityPosition] = useState("");

    const submitForm = () => {
        fetch(`http://localhost:5000/api/notice`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                authorityName,
                authorityPosition
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setTitle("");
                setDescription("");
                setAuthorityName("");
                setAuthorityPosition("");
                alert("Notice Created")
            })
    }

    return (
        <>
            <Header />
            <ThemeHeader />
            <Typography sx={{ textAlign: 'center', m: 2, fontFamily: "Poppins" }} variant="h4" >Notice Form</Typography>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={5} sx={{ m: 1 }}>
                    <TextField sx={{ m: 1 }}
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        label="Title" variant="outlined" fullWidth size="small" />
                    <TextField sx={{ m: 1 }}
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        label="Description" variant="outlined" fullWidth size="small" />
                    <TextField sx={{ m: 1 }}
                        value={authorityName} onChange={(e) => setAuthorityName(e.target.value)}
                        label="Authority Name" variant="outlined" fullWidth size="small" />
                    <TextField sx={{ m: 1 }}
                        value={authorityPosition} onChange={(e) => setAuthorityPosition(e.target.value)}
                        label="Authority Position" variant="outlined" fullWidth size="small" />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/admin-dashboard">
                    <Button variant="outlined" sx={{
                        m: 2, pr: 4, pl: 4,
                        color: '#041846',
                        borderColor: '#041846',
                        textTransform: 'none',
                        fontFamily: "Poppins"
                    }}>Back</Button></Link>
                <Button variant="contained" onClick={submitForm} sx={{
                    m: 2, pr: 4, pl: 4, color: 'white',
                    backgroundColor: '#041846',
                    textTransform: 'none',
                    fontFamily: "Poppins"
                }}>Create</Button>
            </Box>
        </>
    )
}
