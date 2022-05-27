import { Table, TableHead, TableRow, TableCell, TableContainer, Paper, Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import StudentDetails from './StudentDetails';

export default function StudentsList() {
    const { user } = useContext(UserContext);
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/student`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.students);
                setStudents(data.students);
            })
    }, [])

    // const handleYear = (e) => {
    //     fetch(`http://localhost:5000/api/student/${e.target.value}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + user.token
    //         }
    //     }).then(res => res.json())
    //         .then(data => {
    //             console.log(data.students);
    //             setStudents(data.students);
    //         })
    // }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filterStudents = students
        .filter(e => e.fullName.toLowerCase().includes(search.toLowerCase()))
        .map(e => {
            return e
        })

    return (
        <>
            <Header />
            <ThemeHeader />
            {selectedStudent ? <StudentDetails selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} /> :
                <Box sx={{ m: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
                        <TextField id="search" label="Search by Name" type="text" onChange={handleSearch} size="small" />
                        {/* <FormControl sx={{ width: 175, ml: 1 }}>
                            <InputLabel id="demo-simple-select-label">Graduation Year</InputLabel>
                            <Select onChange={handleYear} label="Graduation Year" size="small">
                                <MenuItem value={10}>2021</MenuItem>
                                <MenuItem value={20}>2022</MenuItem>
                                <MenuItem value={30}>2023</MenuItem>
                            </Select>
                        </FormControl> */}
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>SNo.</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Student ID</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Roll Number</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Full Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Department</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Semester</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Gender</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Email Id</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bolder' }}>Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {students && filterStudents.map((stud, i) => (
                                        <TableRow key={stud._id}>
                                            <TableCell align="center">
                                                {i + 1}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.userId}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.rollno ?? "--"}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.fullName}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.department ?? "--"}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.semester ?? "--"}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.gender ?? "--"}
                                            </TableCell>
                                            <TableCell align="center">
                                                {stud.email}
                                            </TableCell>
                                            <TableCell sx={{
                                                cursor: 'pointer',
                                                color: 'blue'
                                            }} align="center" onClick={() => setSelectedStudent(stud)}>
                                                view
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                </Box>
            }
        </>
    )
} 