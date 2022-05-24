import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Typography, Divider, TextField, Button } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import { Link } from 'react-router-dom';
import Header from '../Header';
import ThemeHeader from '../ThemeHeader';

export default function EditProfile() {
    const { user } = useContext(UserContext)
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [department, setDepartment] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [semester, setSemester] = useState("");
    const [rollno, setRollno] = useState("");
    const [github, setGithub] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [otherLinks, setOtherLinks] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.student)
                setFullName(data?.student.fullName)
                setRollno(data?.student.rollno)
                setDepartment(data?.student.department)
                setSemester(data?.student.semester)
                setGraduationYear(data?.student.graduationYear)
                setAddress(data?.student.address)
                setGithub(data?.student.github)
                setLinkedIn(data?.student.linkedIn)
                setOtherLinks(data?.student.otherLinks)
                setPhoneNumber(data?.student.phoneNumber)
            })
    }, [])

    const handleSubmit = () => {
        const valuedata = JSON.stringify({
            fullName,
            rollno,
            department,
            semester,
            graduationYear,
            phoneNumber,
            address,
            github,
            linkedIn,
            otherLinks 
        })
        console.log(valuedata, "dipti")
        console.log('hello')
        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: valuedata
        }).then(res => res.json())
            .then(data => {
                console.log('hello again')
                console.log(data)
            })
    }

    return (
        <>
            <Header />
            <ThemeHeader />
            <Box sx={{ m: 4, height: '100%', border: '2px solid #c8c7c7', borderRadius: '6px' }}>
                <Grid container sx={{ p: 2 }} flexDirection="column">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h6" gutterBottom component="div" sx={{
                            fontFamily: "Poppins",
                            fontSize: '18px',
                            color: '#051846',
                            fontWeight: 900
                        }} >
                            My profile
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div" sx={{
                            mt: 2,
                            p: 0.8,
                            textAlign: "center",
                            borderRadius: "6px",
                            fontFamily: "Poppins",
                            backgroundColor: "#401E44",
                            fontSize: '14px',
                            color: '#FFFFFF',
                            fontWeight: 900
                        }} >
                            This information will help us - customize the companies according to your skills.
                        </Typography>
                        <Divider sx={{ mt: 2, backgroundColor: "#000000" }} />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        {/* <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}> */}
                        <Box sx={{ m: 3 }}>
                            <TextField sx={{ mt: 3 }} value={fullName} onChange={(e) => setFullName(e.target.value)} label="Full Name" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={rollno} onChange={(e) => setRollno(e.target.value)} label="Roll number" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={department} onChange={(e) => setDepartment(e.target.value)} label="Department" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={semester} onChange={(e) => setSemester(e.target.value)} label="Semester" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} label="Graduation year" variant="outlined" size='small' fullWidth />
                        </Box>
                        <Box sx={{ m: 3 }}>
                            <TextField sx={{ mt: 3 }} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="Phone number" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={address} onChange={(e) => setAddress(e.target.value)} label="Address" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={github} onChange={(e) => setGithub(e.target.value)} label="Github profile" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} label="LinkedIn profile" variant="outlined" size='small' fullWidth />
                            <TextField sx={{ mt: 3 }} value={otherLinks} onChange={(e) => setOtherLinks(e.target.value)} label="Other links" variant="outlined" size='small' fullWidth />
                        </Box>
                        {/* </Grid> */}
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Link to="/dashboard"><Button onMouseOver={(e) => {
                            e.target.style.color = '#401E44'
                            e.target.style.borderColor = '#401E44'
                        }} sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: '#401E44',
                                borderColor: '#401E44',
                                textTransform: 'none',
                                fontFamily: "Poppins"
                            }} variant="outlined">Back</Button></Link>
                        <Button onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#401E44'
                        }} onClick={handleSubmit}
                            sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: '#401E44'
                            }} variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}