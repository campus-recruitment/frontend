import React, { useEffect, useContext, useState } from "react";
import { Typography, Box, Grid, CardHeader, Card, CardContent } from '@mui/material';
import { UserContext } from "../../contexts/userContext";

export default function Notices() {
    const { user } = useContext(UserContext);
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/notice', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.notices[0].title);
                setNotice(data.notices);
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
                Notices
            </Typography>
            <Box sx={{ height: '74vh', border: '2px solid #c8c7c7', borderRadius: '6px', overflow: 'scroll', scrollbarColor: '#401E44 white' }}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        {notice.map((not, i) => (
                            <Card key={i} sx={{ m: 2 }} >
                                <CardContent>
                                    <Typography sx={{ fontSize: '14px' }} color="text.secondary">Date: {dateFormat(not.date)}</Typography>
                                    <Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', textDecoration: 'underline' }}>{not.title}</Typography>
                                    <Typography sx={{ textAlign: 'center', fontSize: '15px', mt: 1 }}>{not.description}</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <Box>
                                            <Typography sx={{ textAlign: 'center', fontSize: '15px' }} color="text.secondary">{not.authorityName}</Typography>
                                            <Typography sx={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>{not.authorityPosition}</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}