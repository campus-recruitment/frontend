import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Typography, Divider, TextField, Button } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import PersonalDetails from './PersonalDetails';
import Header from '../Header';
import ThemeHeader from '../ThemeHeader';

export default function EditProfile() {
    const { user } = useContext(UserContext)
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [department, setDepartment] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [semester, setSemester] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [github, setGithub] = useState("");
    const [graduation, setGraduation] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [link, setLink] = useState("");
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
                setRollNo(data?.student.rollno)
                setDepartment(data?.student.department)
                setSemester(data?.student.semester)
                setGraduation(data?.student.graduationYear)
                setAddress(data?.student.address)
                setGithub(data?.student.github)
                setLinkedin(data?.student.linkedin)
                setLink(data?.student.otherLinks)
                setPhoneNo(data?.student.phoneNumber)
            })
    }, [])

    const handleNext = () => {
        if(page == 1) {
            setPage(2)
        } else if(page == 2) {
            setPage(3)
        } else if(page == 3) {
            setPage(4)
        }
    }
    const handleBack = () => {
        if(page == 2) {
            setPage(1)
        } else if(page == 3) {
            setPage(2)
        } else if(page == 4) {
            setPage(3)
        }
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
                        {page == 1 ?
                        <PersonalDetails
                            fullName={fullName}
                            address={address}
                            department={department}
                            semester={semester}
                            rollNo={rollNo}
                            graduation={graduation}
                            phoneNo={phoneNo}
                            github={github}
                            linkedin={linkedin}
                            link={link}
                            setFullName={setFullName}
                            setAddress={setAddress}
                            setDepartment={setDepartment}
                            setSemester={setSemester}
                            setRollNo={setRollNo}
                            setGraduation={setGraduation}
                            setPhoneNo={setPhoneNo}
                            setGithub={setGithub}
                            setLinkedin={setLinkedin}
                            setLink={setLink}
                        /> : <></> }
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onMouseOver={(e) => {
                            e.target.style.color = '#FF6F3F'
                            e.target.style.borderColor = '#FF6F3F'
                        }} onClick={handleBack}
                        sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: '#FF6F3F',
                            borderColor: '#FF6F3F',
                            textTransform: 'none',
                            fontFamily: "Poppins"
                        }} variant="outlined">Back</Button>
                        <Button onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#FF6F3F'
                        }} onClick={handleNext}
                            sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: '#FF6F3F'
                            }} variant="contained">Next</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}