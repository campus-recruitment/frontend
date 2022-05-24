import React, { useEffect } from 'react';
import { Grid, Box, TextField, Button } from '@mui/material'

export default function PersonalDetails({
    fullName,
    address,
    department,
    semester,
    rollNo,
    graduation,
    phoneNo,
    github,
    linkedin,
    link,
    setFullName,
    setAddress,
    setDepartment,
    setSemester,
    setRollNo,
    setGraduation,
    setPhoneNo,
    setGithub,
    setLinkedin,
    setLink,
}) {

    

    return (
        <>
            <Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ m: 3 }}>
                        <TextField sx={{ mt: 3 }} value={fullName} onChange={(e) => setFullName(e.target.value)} label="Full Name" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={rollNo} onChange={(e) => setRollNo(e.target.value)} label="Roll number" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={department} onChange={(e) => setDepartment(e.target.value)} label="Department" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={semester} onChange={(e) => setSemester(e.target.value)} label="Semester" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={graduation} onChange={(e) => setGraduation(e.target.value)} label="Graduation year" variant="outlined" size='small' fullWidth />
                    </Box>
                    <Box sx={{ m: 3 }}>
                        <TextField sx={{ mt: 3 }} value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} label="Phone number" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={address} onChange={(e) => setAddress(e.target.value)} label="Address" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={github} onChange={(e) => setGithub(e.target.value)} label="Github profile" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={linkedin} onChange={(e) => setLinkedin(e.target.value)} label="LinkedIn profile" variant="outlined" size='small' fullWidth />
                        <TextField sx={{ mt: 3 }} value={link} onChange={(e) => setLink(e.target.value)} label="Other links" variant="outlined" size='small' fullWidth />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}