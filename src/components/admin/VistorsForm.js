import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import '@fontsource/poppins';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import { Link } from 'react-router-dom';

export default function VisitorsForm() {
    const { user } = useContext(UserContext);
    const [companyName, setCompanyName] = useState("");
    const [aboutCompany, setAboutCompany] = useState("");
    const [positionName, setPositionName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [packages, setPackages] = useState("");
    const [vacancies, setVacancies] = useState("");
    const [skillsRequired, setSkillsRequired] = useState("");
    const [website, setWebsite] = useState("");
    const [dueDate, setDueDate] = useState("");

    const submitForm = () => {
        fetch(`http://localhost:5000/api/visitor`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyName,
                aboutCompany,
                positionName,
                description,
                location,
                packages,
                vacancies,
                skillsRequired,
                website,
                dueDate
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Visitor Created!!');
                setCompanyName("");
                setAboutCompany("");
                setPositionName("");
                setDescription("");
                setLocation("");
                setPackages("");
                setVacancies("");
                setSkillsRequired("");
                setWebsite("");
                setDueDate("");
            })
    }

    return (
        <>
            <Header />
            <ThemeHeader />
            <Typography sx={{ textAlign: 'center', m: 2, fontFamily: "Poppins" }} variant="h4" >Visitors Form</Typography>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={5} sx={{ m: 1 }}>
                    <TextField value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                        sx={{ m: 1 }} label="Company Name" variant="outlined" fullWidth size="small" />
                    <TextField value={aboutCompany} onChange={(e) => setAboutCompany(e.target.value)}
                        sx={{ m: 1 }} label="About Company" variant="outlined" fullWidth size="small" multiline />
                    <TextField value={positionName} onChange={(e) => setPositionName(e.target.value)}
                        sx={{ m: 1 }} label="Position Name" variant="outlined" fullWidth size="small" />
                    <TextField value={description} onChange={(e) => setDescription(e.target.value)}
                        sx={{ m: 1 }} label="About Job/Internship" variant="outlined" fullWidth size="small" multiline />
                    <TextField value={location} onChange={(e) => setLocation(e.target.value)}
                        sx={{ m: 1 }} label="Location" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item lg={5} md={5} sx={{ m: 1 }}>
                    <TextField value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)}
                        sx={{ m: 1 }} label="Skills Required" variant="outlined" fullWidth size="small" multiline />
                    <TextField value={vacancies} onChange={(e) => setVacancies(e.target.value)}
                        sx={{ m: 1 }} label="Vacancies" type="number" variant="outlined" fullWidth size="small" />
                    <TextField value={website} onChange={(e) => setWebsite(e.target.value)}
                        sx={{ m: 1 }} label="Company Website" variant="outlined" fullWidth size="small" />
                    <TextField value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date"
                        sx={{ m: 1 }} label="Due Date" variant="outlined" fullWidth size="small" />
                    <TextField value={packages} onChange={(e) => setPackages(e.target.value)}
                        sx={{ m: 1 }} label="Package" variant="outlined" fullWidth size="small" />
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
                <Button onMouseOver={(e) => e.target.style.backgroundColor = '#041846'} variant="contained" onClick={submitForm} sx={{
                    m: 2, pr: 4, pl: 4, color: 'white',
                    backgroundColor: '#041846',
                    textTransform: 'none',
                    fontFamily: "Poppins"
                }}>Create</Button>
            </Box>
        </>
    )
}
