import React, { useState } from 'react';
import { Button, Box, Paper, Grid, Table, TableRow, TableCell, Typography } from '@mui/material';
import { Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent, TextField } from '@mui/material';

export default function StudentDetails({ selectedStudent, setSelectedStudent }) {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const reset = () => {
        console.log('start')
        if (password === confirmPassword) {
            console.log('equal') 
            fetch("http://localhost:5000/reset", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert(data.message);
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setOpen(false);
                })
        }
    }

    return (
        <>
            <Typography variant='h5' sx={{ m: 2 }}>{selectedStudent.fullName} ({selectedStudent.email})</Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Paper sx={{ width: '100%' }}>
                            <Table aria-labelledby="tableTitle" >
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Student ID</TableCell>
                                    <TableCell align="center">{selectedStudent.userId}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Roll Number</TableCell>
                                    <TableCell align="center">{selectedStudent.rollno ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Email ID</TableCell>
                                    <TableCell align="center">{selectedStudent.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Full Name</TableCell>
                                    <TableCell align="center">{selectedStudent.fullName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Department</TableCell>
                                    <TableCell align="center">{selectedStudent.department ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Semester</TableCell>
                                    <TableCell align="center">{selectedStudent.semester ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Gender</TableCell>
                                    <TableCell align="center">{selectedStudent.gender ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Graduation Year</TableCell>
                                    <TableCell align="center">{selectedStudent.graduationYear ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Phone Number</TableCell>
                                    <TableCell align="center">{selectedStudent.phoneNumber ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Address</TableCell>
                                    <TableCell align="center">{selectedStudent.address ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Github</TableCell>
                                    <TableCell align="center">{selectedStudent.github ?? "--"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bolder' }}>LinkedIn</TableCell>
                                    <TableCell align="center">{selectedStudent.linkedIn ?? "--"}</TableCell>
                                </TableRow>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Paper sx={{ width: '100%' }}>
                            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableCell sx={{ fontWeight: 'bolder' }}>Applied Visitors</TableCell>
                            </TableRow>
                            <Table>
                                {selectedStudent.appliedVisitors.length != 0 ?
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>SNo.</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Visitor ID</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Visitor Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bolder' }}>Role</TableCell>
                                    </TableRow> :
                                    <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TableCell sx={{ color: "red" }}>---- No Applied Visitor ----</TableCell>
                                    </TableRow>
                                }
                                {selectedStudent.appliedVisitors?.map((stud, i) => (
                                    <TableRow>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{stud._id}</TableCell>
                                        <TableCell>{stud.companyName}</TableCell>
                                        <TableCell>{stud.positionName}</TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableCell sx={{ fontWeight: 'bolder' }}>Saved Visitors</TableCell>
                            </TableRow>
                            <Table>
                                {selectedStudent.savedVisitors.length != 0 ?
                                    <TableRow>
                                        <TableCell>SNo.</TableCell>
                                        <TableCell>Visitor ID</TableCell>
                                        <TableCell>Visitor Name</TableCell>
                                        <TableCell>Role</TableCell>
                                    </TableRow> :
                                    <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TableCell sx={{ color: "red" }}>---- No Saved Visitor ----</TableCell>
                                    </TableRow>
                                }
                                {selectedStudent.savedVisitors?.map((stud, i) => (
                                    <TableRow>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{stud._id}</TableCell>
                                        <TableCell>{stud.companyName}</TableCell>
                                        <TableCell>{stud.positionName}</TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                        </Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
                            <Button sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: '#401E44'
                            }} variant='contained' onClick={() => setSelectedStudent(null)}>Back</Button>
                            <Button sx={{
                                mr: 3, pl: 3, pr: 3,
                                color: "#FFFFFF",
                                textTransform: 'none',
                                backgroundColor: 'red'
                            }} variant='contained' onClick={handleClickOpen}>Reset Password</Button>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Reset Password</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Student Name: {selectedStudent.fullName}
                                    </DialogContentText>
                                    <TextField value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        margin="dense"
                                        id="email"
                                        label="Student's Email"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        margin="dense"
                                        id="password"
                                        label="New Password"
                                        type="password"
                                        fullWidth
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        margin="dense"
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        fullWidth
                                        variant="standard"
                                        size="small"
                                    />
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
                                    }} variant="contained" onClick={reset}>Reset</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}