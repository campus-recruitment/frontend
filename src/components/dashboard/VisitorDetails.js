import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';

export default function VisitorDetails({ selectedVisitor, setSelectedVisitor }) {
    const { user } = useContext(UserContext)
    const [applied, setApplied] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        console.log(JSON.stringify(selectedVisitor, null, 1))
        console.log(selectedVisitor.studentsSaved.includes(user._id))
        if (selectedVisitor.studentsApplied.includes(user._id)) {
            setApplied(true);
        }
        else setApplied(false);
        if (selectedVisitor.studentsSaved.includes(user._id)) {
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
            <Box sx={{ height: '74vh', p:2, border: '2px solid #c8c7c7', borderRadius: '6px', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
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
                    {saved ? <Bookmark /> :
                        <BookmarkBorder onClick={() => save(selectedVisitor._id)} />
                    }
                </Box>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '18px',
                    color: '#051846',
                    marginTop: '10px',
                    fontWeight: 'bold',
                }}>About {selectedVisitor.companyName}  </Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '15px',
                    color: '#051846',
                    marginTop: '10px',

                }}><a href={selectedVisitor.website}>{selectedVisitor.website}</a></Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '12px',
                    color: '#051846',
                    marginTop: '8px',
                }} >About {selectedVisitor.aboutCompany}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '12px',
                    color: '#051846',
                    marginTop: '8px',
                }} >About Job/Internship</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '12px',
                    color: '#051846',
                    marginTop: '10px',
                }} >{selectedVisitor.description}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '12px',
                    color: '#051846',
                    marginTop: '10px',
                }} >Skills Required</Typography>
                {selectedVisitor.skillsRequired.map(i => (
                    <Chip label={i} sx={{ ml: 2 }} />
                ))}
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '11px',
                    color: '#051846',
                    marginTop: '10px',
                    fontWeight: 'bold',
                }}>Number of Openings</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '12px',
                    color: '#051846',
                    marginTop: '10px',
                }} color="text.secondary">{selectedVisitor.vacancies}</Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontSize: '12px',
                    color: '#051846',
                    marginTop: '10px',
                }}>Hiring Process</Typography>
                <ol>
                    {selectedVisitor?.hiringProcess.map(i => (
                        <li>{i}</li>
                    ))}
                </ol>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{ mr: 2 }} color="error" onClick={() => setSelectedVisitor(null)}>Back</Button>
                    {applied ? <Button variant="contained" sx={{ textAlign: 'right', mt: 2, fontFamily: "Poppins" }} disabled>Applied</Button> :
                        <Button variant="contained" sx={{
                            color: 'white',
                            backgroundColor: '#041846',
                            textTransform: 'none',
                            fontFamily: "Poppins"
                        }} onClick={() => applyNow(selectedVisitor._id)}>Apply Now</Button>
                    }
                </Box>
            </Box>
        </>
    )
}