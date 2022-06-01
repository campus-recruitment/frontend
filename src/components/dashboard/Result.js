import React, { useContext, useEffect, useState } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { UserContext } from '../../contexts/userContext';

export default function Result() {
    const { user } = useContext(UserContext);
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log(user)
        fetch(`http://localhost:5000/api/student/${user.user_id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.student.selectedVisitors)
                setResults(data.student.selectedVisitors)
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
                Placement Result
            </Typography>
            <Box sx={{ height: '74vh', borderRadius: '6px', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        {results.map((res, i) => (
                            <Card elevation={0} key={i} variant="outlined" sx={{ m: 2 }} >
                                <CardContent>
                                    <Typography sx={{ textAlign: 'left', fontSize: '15px', mt: 1 }}>Congratulations <b>{user.given_name}</b>. </Typography>
                                    <Typography sx={{ textAlign: 'left', fontSize: '15px', mt: 1 }}>You are selected for the <b>{res.positionName}</b> role in <b>{res.companyName}.</b> Soon, you will receive an offer letter from the company.</Typography>
                                    <Typography sx={{ textAlign: 'right', fontSize: '15px', mt: 1 }}>Thank You!</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}