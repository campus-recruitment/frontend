import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, Box } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import '@fontsource/poppins';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';

export default function VisitorsForm() {
    const { user } = useContext(UserContext)
    const [criCount, setCriCount] = useState(1);
    const [jobCount, setJobCount] = useState(1);
    const [skillsCount, setSkillsCount] = useState(1);
    const [hirCount, setHirCount] = useState(1);

    const increaseCriteriaCount = () => {
        setCriCount(prevCriCount => prevCriCount + 1);
    }

    const decreaseCriteriaCount = () => {
        if (criCount > 1)
            setCriCount(prevCriCount => prevCriCount - 1);
    }

    const increaseJobCount = () => {
        setJobCount(prevJobCount => prevJobCount + 1);
    }

    const decreaseJobCount = () => {
        if (jobCount > 1)
            setJobCount(prevJobCount => prevJobCount - 1);
    }

    const increaseSkillsCount = () => {
        setSkillsCount(prevSkillsCount => prevSkillsCount + 1);
    }

    const decreaseSkillsCount = () => {
        if (skillsCount > 1)
            setSkillsCount(prevSkillsCount => prevSkillsCount - 1);
    }

    const increaseHirCount = () => {
        setHirCount(prevHirCount => prevHirCount + 1);
    }

    const decreaseHirCount = () => {
        if (hirCount > 1)
            setHirCount(prevHirCount => prevHirCount - 1);
    }

    const submitForm = () => {
        fetch(`http://localhost:5000/api/visitor`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify({
                
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
        <Header />
        <ThemeHeader />
            <Typography sx={{ textAlign: 'center', m: 2, fontFamily: "Poppins" }} variant="h4" >Visitors Form</Typography>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={5} sx={{ m: 1 }}>
                    <TextField sx={{
                        m: 2
                    }} label="Company Name" variant="outlined" fullWidth size="small" />
                    <TextField sx={{
                        m: 2
                    }} label="Position Name" variant="outlined" fullWidth size="small" />
                    <TextField sx={{
                        m: 2
                    }} label="About Company" variant="outlined" fullWidth size="small" multiline />
                    <Box sx={{ display: 'flex' }}>
                        {[
                            ...Array(jobCount),
                        ].map((_, index) => (
                            <TextField key={index} sx={{
                                m: 2
                            }} label="About Job/Internship" variant="outlined" fullWidth size="small" multiline />
                        ))
                        }
                        <Box>
                            <Button onClick={increaseJobCount}>+</Button>
                            <Button onClick={decreaseJobCount}>-</Button>
                        </Box>
                    </Box>
                    <TextField sx={{
                        m: 2
                    }} label="Location" variant="outlined" fullWidth size="small" />
                    <TextField sx={{
                        m: 2
                    }} label="Package" variant="outlined" fullWidth size="small" />
                    <Box sx={{ display: 'flex' }}>

                        {[
                            ...Array(skillsCount),
                        ].map((_, index) => (
                            <TextField key={index} sx={{
                                m: 2
                            }} label="Skills Required" variant="outlined" fullWidth size="small" multiline />
                        ))
                        }
                        <Box>
                            <Button onClick={increaseSkillsCount}>+</Button>
                            <Button onClick={decreaseSkillsCount}>-</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={5} md={5} sx={{ m: 1 }}>
                    <TextField sx={{
                        m: 2
                    }} label="Vacancies" type="number" variant="outlined" fullWidth size="small" />
                    <Box sx={{ display: 'flex' }}>

                        {[
                            ...Array(criCount),
                        ].map((_, index) => (
                            <TextField key={index} sx={{
                                m: 2
                            }} label="Criteria" variant="outlined" fullWidth size="small" multiline />
                        ))
                        }
                        <Box>
                            <Button onClick={increaseCriteriaCount}>+</Button>
                            <Button onClick={decreaseCriteriaCount}>-</Button>
                        </Box>
                    </Box>
                    <TextField sx={{
                        m: 2
                    }} label="Company Website" variant="outlined" fullWidth size="small" />
                    <TextField sx={{
                        m: 2
                    }} label="Is it Full Time?(True or False)" variant="outlined" fullWidth size="small" />
                    <Box sx={{ display: 'flex' }}>

                        {[
                            ...Array(hirCount),
                        ].map((_, index) => (
                            <TextField key={index} sx={{
                                m: 2
                            }} label="Hiring Process" variant="outlined" fullWidth size="small" multiline />
                        ))
                        }
                        <Box>
                            <Button onClick={increaseHirCount}>+</Button>
                            <Button onClick={decreaseHirCount}>-</Button>
                        </Box>
                    </Box>
                    <TextField sx={{
                        m: 2
                    }} label="Due Date" variant="outlined" fullWidth size="small" />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={submitForm} sx={{
                    m: 2, pr: 4, pl: 4, color: 'white',
                    backgroundColor: '#041846',
                    textTransform: 'none',
                    fontFamily: "Poppins"
                }}>Add</Button>
            </Box>
        </>
    )
}
