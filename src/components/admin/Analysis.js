import React, { useContext } from 'react';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import { Card, CardContent, Typography } from '@mui/material';

export default function Analysis() {
    return (
        <>
            <Header />
            <ThemeHeader />
            <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        belent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>

        </>
    )
}

// Analysis - total registered students, total visitors added
// list of students - with their details 
// list of visitors - with details 