import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import { BookmarkBorder } from '@mui/icons-material';

export default function VisitorDetails({ selectedVisitor, setSelectedVisitor }) {
    const { user } = useContext(UserContext)
    const [applied, setApplied] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        // console.log(selectedVisitor.positionName)
        console.log(user)
        if (selectedVisitor.studentsApplied.includes(user._id)) {
            setApplied(true);
        }
        else setApplied(false);
    }, [])

    const applyNow = (id) => {
        fetch(`http://localhost:5000/api/visitor/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify({
                studentsApplied: [...user._id]
            })
        }).then(res => res.json())
            .then(data => {
                setApplied(true);
                console.log(data);
            })

        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify({
                appliedVisitors: [...id]
            })
        }).then(res => res.json())
            .then(data => {
                setApplied(true);
                console.log(data);
            })
    }

    const save = (id) => {
        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify({
                savedVisitors: [...id]
            })
        }).then(res => res.json())
            .then(data => {
                setSaved(true);
                console.log(data);
            })
    }
 
    return (
        <>
            <Box sx={{ mt: 2, p: 2, height: '95%', border: '2px solid #c8c7c7', borderRadius: '6px' }}>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'

                    }}>
                    <Typography variant="h5" >{selectedVisitor.positionName} job/internship at {selectedVisitor.companyName}</Typography>
                    <BookmarkBorder onClick={() => save(selectedVisitor._id)} />
                </Box>
                <Typography>About {selectedVisitor.companyName}</Typography>
                <Typography><a href={selectedVisitor.website}>{selectedVisitor.website}</a></Typography>
                <Typography color="text.secondary">About {selectedVisitor.aboutCompany}</Typography>
                <Typography>About Job/Internship</Typography>
                <Typography color="text.secondary">{selectedVisitor.description}</Typography>
                <Typography>Skills Required</Typography>
                {selectedVisitor.skillsRequired.map(i => (
                    <Chip label={i} sx={{ ml: 2 }} />
                ))}
                <Typography>Number of Openings</Typography>
                <Typography color="text.secondary">{selectedVisitor.vacancies}</Typography>
                <Typography>Hiring Process</Typography>
                <ol>
                    {selectedVisitor?.hiringProcess.map(i => (
                        <li>{i}</li>
                    ))}
                </ol>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{ mr: 2 }} color="error" onClick={() => setSelectedVisitor(null)}>Back</Button>
                    {applied ? <Button variant="contained" disabled>Applied</Button> :
                        <Button variant="contained" onClick={() => applyNow(selectedVisitor._id)}>Apply Now</Button>
                    }
                </Box>
            </Box>
        </>
    )
}