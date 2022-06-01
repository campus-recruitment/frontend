import React, { useContext, useEffect, useState } from 'react';
import { Button, Box, Paper, Grid, Table, TableRow, TableCell, Typography, Tooltip } from '@mui/material';
import { Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

export default function VisitorDetails({ selectedVisitor, setSelectedVisitor }) {
    const { user } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectVisitor = (userId, id) => {
        fetch(`http://localhost:5000/api/student/${userId}/select-visitor`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                selectedVisitors: selectedVisitor._id,
                _id: id
            })
        }).then(res => res.json())
            .then(data => {
                alert('Student added to the placed list.')
                setSelectedVisitor(null);
                console.log(data);
            })
    }

    const deselectVisitor = (userId, id) => {
        fetch(`http://localhost:5000/api/student/${userId}/remove-selected-visitor`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                selectedVisitors: selectedVisitor._id,
                _id: id
            })
        }).then(res => res.json())
            .then(data => {
                alert('Student removed from the placed list.')
                setSelectedVisitor(null);
                console.log(data);
            })
    }

    const deleteVisitor = () => {
        console.log('start')

        fetch(`http://localhost:5000/api/visitor/${selectedVisitor._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success == true)
                    alert('Visitor Deleted Successfully!');
                alert(data.message)
                setOpen(false);
                setSelectedVisitor(null)
            })
    }

    return (
        <>
            <Typography variant='h5' sx={{ m: 2 }}>{selectedVisitor.companyName} ({selectedVisitor.positionName})</Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Paper sx={{ width: '100%' }}>
                            <Table aria-labelledby="tableTitle" >
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Visitor ID</TableCell>
                                    <TableCell align="center">{selectedVisitor._id}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Visitor Name</TableCell>
                                    <TableCell align="center">{selectedVisitor.companyName ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>About Visitor</TableCell>
                                    <TableCell align="center">{selectedVisitor.aboutCompany}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Role</TableCell>
                                    <TableCell align="center">{selectedVisitor.positionName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>About Job/Internship</TableCell>
                                    <TableCell align="center">{selectedVisitor.description ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Package</TableCell>
                                    <TableCell align="center">{selectedVisitor.packages ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Visitor Website</TableCell>
                                    <TableCell align="center">{selectedVisitor.website ?? "--"}</TableCell>
                                </TableRow>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Paper sx={{ width: '100%' }}>
                            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableCell sx={{ fontWeight: 'bolder' }}>Applicants</TableCell>
                            </TableRow>
                            <Table>
                                {selectedVisitor.studentsApplied.length != 0 ?
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>SNo.</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Student ID</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Full Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Roll No</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Placed</TableCell>
                                    </TableRow> :
                                    <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TableCell sx={{ color: "red" }}>---- No Applied Visitor ----</TableCell>
                                    </TableRow>
                                }
                                {selectedVisitor.studentsApplied.map((stud, i) => (
                                    <TableRow>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{stud.userId}</TableCell>
                                        <TableCell>{stud.fullName}</TableCell>
                                        <TableCell>{stud.rollno}</TableCell>
                                        <TableCell>
                                            {stud.selectedVisitors.includes(selectedVisitor._id) ?
                                                <Button onClick={() => deselectVisitor(stud.userId, stud._id)} sx={{
                                                    mr: 1, pl: 2, pr: 2,
                                                    color: "red",
                                                    textTransform: 'none',
                                                    borderColor: 'red'
                                                }} variant="outlined" size="small">Remove</Button> :
                                                <Button onClick={() => selectVisitor(stud.userId, stud._id)} sx={{
                                                    mr: 1, pl: 2, pr: 2,
                                                    color: "#401E44",
                                                    textTransform: 'none',
                                                    borderColor: '#401E44'
                                                }} variant="outlined" size="small">Select</Button>
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableCell sx={{ fontWeight: 'bolder' }}>Saved Students</TableCell>
                            </TableRow>
                            <Table>
                                {selectedVisitor.studentsSaved.length != 0 ?
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>SNo.</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Student ID</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Full Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Roll No</TableCell>
                                    </TableRow> :
                                    <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TableCell sx={{ color: "red" }}>---- No Saved Student ----</TableCell>
                                    </TableRow>
                                }
                                {selectedVisitor.studentsSaved?.map((stud, i) => (
                                    <TableRow>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{stud.userId}</TableCell>
                                        <TableCell>{stud.fullName}</TableCell>
                                        <TableCell>{stud.rollno}</TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableCell sx={{ fontWeight: 'bolder' }}>Selected Students</TableCell>
                            </TableRow>
                            <Table>
                                {selectedVisitor.selectedStudents.length != 0 ?
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>SNo.</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Student ID</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Full Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Roll No</TableCell>
                                    </TableRow> :
                                    <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TableCell sx={{ color: "red" }}>---- No Selected Student ----</TableCell>
                                    </TableRow>
                                }
                                {selectedVisitor.selectedStudents?.map((stud, i) => (
                                    <TableRow>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{stud.userId}</TableCell>
                                        <TableCell>{stud.fullName}</TableCell>
                                        <TableCell>{stud.rollno}</TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                        </Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
                            <Button onMouseOver={(e) => e.target.style.backgroundColor = '#401E44'} sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: '#401E44'
                            }} variant='contained' onClick={() => setSelectedVisitor(null)}>Back</Button>
                            <Button onMouseOver={(e) => e.target.style.backgroundColor = 'red'} sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: 'red'
                            }} variant='contained' onClick={handleClickOpen}>Delete Visitor</Button>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogContent>
                                    <Typography>Do you really want to delete this visitor?</Typography>
                                </DialogContent>
                                <DialogActions>
                                    <Button sx={{
                                        mr: 1, pl: 3, pr: 3,
                                        color: "#401E44",
                                        textTransform: 'none',
                                        borderColor: '#401E44'
                                    }} variant="outlined" onClick={handleClose}>Cancel</Button>
                                    <Button sx={{
                                        mr: 3, pl: 3, pr: 3,
                                        color: "#FFFFFF",
                                        textTransform: 'none',
                                        backgroundColor: 'red'
                                    }} variant="contained" onClick={deleteVisitor}>Delete</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}