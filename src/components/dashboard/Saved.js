import React, { useState, useContext, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { LocationOn, PlayCircleOutline, Money, DateRange, WorkOutline, ArrowForwardIos } from '@mui/icons-material';
import { UserContext } from '../../contexts/userContext';

export default function Saved() {
    const { user } = useContext(UserContext)
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.student);
                setVisitors(data.student.savedVisitors);
            })
    }, [])
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
                Your Saved Visitors
            </Typography>
            <Box sx={{ height: '74vh', border: '2px solid #c8c7c7', borderRadius: '6px', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
                <Grid container>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        {visitors?.map((vis, i) => (
                            <Card sx={{ m: 2 }} key={i}>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {vis.positionName}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {vis.companyName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <LocationOn sx={{ fontSize: '1.2em' }} />{vis.location}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                <PlayCircleOutline sx={{ fontSize: '1.2em', mr: 0.5 }} />Start Date
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                18/03/2022
                                            </Typography>
                                        </Box>
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
                                                {vis.dueDate}
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
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', mt: -1 }}>
                                    {vis.fullTime ?
                                        <Typography sx={{ fontSize: 14, ml: 1 }} color="text.secondary" gutterBottom>
                                            Full-time
                                        </Typography>
                                        :
                                        <Typography sx={{ fontSize: 14, ml: 1 }} color="text.secondary" gutterBottom>
                                            Part-time
                                        </Typography>
                                    }
                                    {/* <Button size="small" sx={{
                                            textTransform: 'none',
                                            color: '#051846',
                                            fontFamily: "Poppins",
                                            fontWeight: 900,
                                            fontSize: 14
                                        }}>View Details<ArrowForwardIos sx={{ fontSize: '1.2em' }} /></Button> */}
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
                </Grid>
            </Box>
        </>
    )
}