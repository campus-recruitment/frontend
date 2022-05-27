import React, { useEffect, useContext, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableContainer, Paper, Box, TextField } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import VisitorDetails from './VisitorDetails';

export default function VisitorsList() {
    const { user } = useContext(UserContext);
    const [visitors, setVisitors] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedVisitor, setSelectedVisitor] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/visitor', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.visitor);
                setVisitors(data.visitor);
            })
    }, [selectedVisitor])

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filterVisitors = visitors
        .filter(e => e.companyName.toLowerCase().includes(search.toLowerCase()))
        .map(e => {
            return e
        })

    return (
        <>
            <Header />
            <ThemeHeader />
            {selectedVisitor ? <VisitorDetails selectedVisitor={selectedVisitor} setSelectedVisitor={setSelectedVisitor} /> :
                <Box sx={{ m: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
                        <TextField id="search" label="Search by Visitor Name" type="text" onChange={handleSearch} size="small" />
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
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Visitor ID</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Visitor Name</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Role</TableCell>
                                            {/* <TableCell align="center" sx={{ fontWeight: 'bolder' }}>About Visitor</TableCell> */}
                                            {/* <TableCell align="center" sx={{ fontWeight: 'bolder' }}>About Job/Internship</TableCell> */}
                                            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Package</TableCell>
                                            {/* <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Visitor Website</TableCell> */}
                                            <TableCell align="left" sx={{ fontWeight: 'bolder' }}>Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {visitors && filterVisitors.map((vis, i) => (
                                        <TableRow key={vis._id}>
                                            <TableCell align="center">
                                                {i + 1}
                                            </TableCell>
                                            <TableCell align="center">
                                                {vis._id}
                                            </TableCell>
                                            <TableCell align="center">
                                                {vis.companyName ?? "--"}
                                            </TableCell>
                                            <TableCell align="center">
                                                {vis.positionName}
                                            </TableCell>
                                            {/* <TableCell align="center">
                                            {vis.aboutCompany ?? "--"}
                                        </TableCell> */}
                                            {/* <TableCell align="center">
                                            {vis.description ?? "--"}
                                        </TableCell> */}
                                            <TableCell align="center">
                                                {vis.packages ?? "--"}
                                            </TableCell>
                                            {/* <TableCell align="center">
                                            {vis.website}
                                        </TableCell> */}
                                            <TableCell sx={{
                                                cursor: 'pointer',
                                                color: 'blue'
                                            }} align="center" onClick={() => setSelectedVisitor(vis)}>
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