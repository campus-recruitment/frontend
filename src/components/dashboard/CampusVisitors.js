import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography, CardActions, Button, CardHeader, TextField } from '@mui/material';
import { LocationOn, PlayCircleOutline, Money, DateRange, WorkOutline, ArrowForwardIos, FilterAlt } from '@mui/icons-material';
import { UserContext } from '../../contexts/userContext';
import VisitorDetails from './VisitorDetails';
import { format, isFuture, isToday } from 'date-fns';

export default function CampusVisitors({ setNum }) {
    const { user } = useContext(UserContext)
    const [visitors, setVisitors] = useState([]);
    const [selectedVisitor, setSelectedVisitor] = useState(null);
    const [search, setSearch] = useState("");

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
    }, [])

    function dateFormat(date) {
        // let newDate = date.split('T');
        return format(new Date(date), 'do LLL yyyy')
        // return format(new Date(), "LL YYYY")
        // return newDate[0];
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filterVisitors = visitors
        .filter(e => e.positionName.toLowerCase().includes(search.toLowerCase()))
        .map(e => {
            return e
        })

    return (
        <>
            {selectedVisitor ?
                <VisitorDetails selectedVisitor={selectedVisitor} setSelectedVisitor={setSelectedVisitor} /> :
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
                        Campus Visitors
                    </Typography>
                    <Box sx={{ height: '74vh', borderRadius: '6px' }}>
                        {filterVisitors.filter(vis => { return isFuture(new Date(vis.dueDate)) || isToday(new Date(vis.dueDate)) }).length != 0 ?
                            <Grid container>
                                <Grid item lg={8} md={8} sm={12} xs={12} sx={{ height: '74vh', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
                                    {visitors && filterVisitors.filter(vis => {
                                        return isFuture(new Date(vis.dueDate)) || isToday(new Date(vis.dueDate))
                                    }).map((vis, i) => (
                                        <Card sx={{ m: 2 }} elevation={0} variant="outlined" key={i}>
                                            <CardContent>
                                                <Typography variant="h6" component="div">
                                                    {vis.positionName}
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                        {vis.companyName}
                                                    </Typography>
                                                    {/* <Typography variant="body2" color="text.secondary">
                                                    <LocationOn sx={{ fontSize: '1.2em' }} />{vis.location}
                                                </Typography> */}
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                        <PlayCircleOutline sx={{ fontSize: '1.2em', mr: 0.5 }} />Start Date
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                        18/03/2022
                                                    </Typography>
                                                </Box> */}
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <Money sx={{ fontSize: '1.2em', mr: 0.5 }} />Package
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                            {vis.packages}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <DateRange sx={{ fontSize: '1.2em', mr: 0.5 }} />Apply By
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                            {dateFormat(vis.dueDate)}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <WorkOutline sx={{ fontSize: '1.2em', mr: 0.5 }} />Vacancies
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                            {vis.vacancies}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                            <CardActions sx={{ display: 'flex', justifyContent: 'end', mt: -4 }}>
                                                {/* {vis.fullTime ?
                                                <Typography sx={{ fontSize: 14, ml: 1 }} color="text.secondary" gutterBottom>
                                                    Full-time
                                                </Typography>
                                                :
                                                <Typography sx={{ fontSize: 14, ml: 1 }} color="text.secondary" gutterBottom>
                                                    Part-time
                                                </Typography>
                                            } */}
                                                <Button size="small" sx={{
                                                    textTransform: 'none',
                                                    color: '#051846',
                                                    fontFamily: "Poppins",
                                                    fontWeight: 900,
                                                    fontSize: 14
                                                }} onClick={() => setSelectedVisitor(vis)}
                                                >View Details<ArrowForwardIos sx={{ fontSize: '1.2em' }} /></Button>
                                            </CardActions>
                                        </Card>
                                    ))}
                                </Grid>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <Card sx={{ m: 2 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography sx={{ ml: 2, mt: 2 }}>Filter</Typography>
                                            <FilterAlt sx={{ fontSize: '18px', mt: 2 }} />
                                        </Box>
                                        <CardContent>
                                            <TextField label="Search by Position" value={search} onChange={(e) => setSearch(e.target.value)} size="small" />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid> :
                            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography>No visitor's available !!</Typography>
                        </Box>
                        }
                    </Box>
                </>
            }
        </>
    )
}