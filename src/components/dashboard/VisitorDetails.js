import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Chip, Button, Tooltip } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';
import { format } from 'date-fns';

export default function VisitorDetails({ selectedVisitor, setSelectedVisitor }) {
    const { user } = useContext(UserContext)
    const [applied, setApplied] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        console.log(selectedVisitor.studentsApplied)
        console.log(user._id)
        console.log(JSON.stringify(selectedVisitor.studentsApplied).includes(user._id))
        if (JSON.stringify(selectedVisitor.studentsApplied).includes(user._id)) {
            setApplied(true);
        }
        else setApplied(false);
    }, [])
 
    useEffect(() => {
        if (JSON.stringify(selectedVisitor.studentsSaved).includes(user._id)) {
            setSaved(true);
        }
        else setSaved(false);
    }, [user])

    const applyNow = (id) => {
        fetch(`http://localhost:5000/api/student/${user.user_id}/add-visitor`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appliedVisitors: id,
                _id: user._id
            })
        }).then(res => res.json())
            .then(data => {
                setApplied(true);
                console.log(data);
            })
    }

    const save = (id) => {
        console.log('hello')
        fetch(`http://localhost:5000/api/student/${user.user_id}/save-visitor`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                savedVisitors: id,
                _id: user._id
            })
        }).then(res => res.json())
            .then(data => {
                console.log('hello again....')
                setSaved(true);
                console.log(data);
            })
    }

    const unsave = (id) => {
        console.log('helllooooo')
        fetch(`http://localhost:5000/api/student/${user.user_id}/remove-visitor`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                savedVisitors: id,
                _id: user._id
            })
        }).then(res => res.json())
            .then(data => {
                console.log('hello again....')
                setSaved(false);
                console.log(data);
            })
    }

    function dateFormat(date) {
        return format(new Date(date), 'do LLL yyyy')
    }

    return (
        <>
            <Typography gutterBottom component="div" sx={{
                mt: 1,
                p: 0.8,
                textAlign: "center",
                fontFamily: "Poppins",
                backgroundColor: "#401E44",
                fontSize: '16px',
                color: '#FFFFFF',
                fontWeight: 900,
            }} >
                Visitor's Description
            </Typography>
            <Box sx={{ height: '74vh', p: 2, border: '2px solid #c8c7c7', borderRadius: '6px', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'

                }}>
                    <Typography variant="h5" sx={{
                        fontFamily: "Poppins",
                        fontSize: '25,mpx',
                        color: '#051846',
                        fontWeight: 'bold',
                    }}>{selectedVisitor.positionName} job/internship at {selectedVisitor.companyName}</Typography>
                    {saved ? <Bookmark onClick={() => unsave(selectedVisitor._id)} sx={{ fontSize: '30px' }} /> :
                        <BookmarkBorder onClick={() => save(selectedVisitor._id)} sx={{ fontSize: '30px' }} />
                    }
                </Box>
                <Typography sx={{
                    mt: 2,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>About {selectedVisitor.companyName}  </Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} >About {selectedVisitor.aboutCompany}</Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Website:  </Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} ><a href={selectedVisitor.website} style={{ textDecoration: 'none', fontSize: '14px' }}> {selectedVisitor.website}</a></Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }} >About Job/Internship</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} >{selectedVisitor.description}</Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }} >Skills Required</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} >{selectedVisitor.skillsRequired}</Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Number of Openings</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} color="text.secondary">{selectedVisitor.vacancies}</Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Location</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} color="text.secondary">{selectedVisitor.location}</Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Apply By</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} color="text.secondary">{dateFormat(selectedVisitor.dueDate)}</Typography>
                <Typography sx={{
                    mt: 1,
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Package</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '14px',
                    color: '#051846',
                }} color="text.secondary">{selectedVisitor.packages}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button onMouseOver={(e) => e.target.style.backgroundColor = 'red'}
                        sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: "#FFFFFF",
                            textTransform: 'none',
                            backgroundColor: 'red'
                        }} onClick={() => setSelectedVisitor(null)}>Back</Button>
                    {console.log(applied)}
                    {applied ? <><Button variant="contained" sx={{
                        mr: 3, pl: 3, pr: 3,
                        // color: "#401E44",
                        textTransform: 'none',
                        cursor: 'default'
                        // backgroundColor: '#FFFFFF'
                    }} disabled>Applied</Button></> :
                        <Button onMouseOver={(e) => e.target.style.backgroundColor = '#401E44'} variant="contained"
                            sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: '#401E44'
                            }} onClick={() => applyNow(selectedVisitor._id)}>Apply Now</Button>
                    }
                </Box>
            </Box>
        </>
    )
}