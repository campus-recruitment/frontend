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

    function dateFormat(date) {
        let newDate = date.split('T');
        return newDate[0];
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
                Your Saved Visitors
            </Typography>
            <Box sx={{ height: '74vh', borderRadius: '6px', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
                {visitors.length != 0 ?
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            {visitors?.map((vis, i) => (
                                <Card elevation={0} variant="outlined" sx={{ m: 2 }} key={i}>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {vis.positionName}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {vis.companyName}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
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
                                </Card>
                            ))}
                        </Grid>
                    </Grid> :
                    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography>You don't have any saved visitor !!</Typography>
                    </Box>
                }
            </Box>
        </>
    )
}