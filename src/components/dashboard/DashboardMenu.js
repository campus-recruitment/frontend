import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '@fontsource/poppins';

export default function DashboardMenu() {
    const [num, setNum] = useState(1);

    useEffect(() => {
        if(num == 1) {

        }
    }, [])

    return (
        <>
            <Card className='menu-card' sx={{ 
                mt: 1, width: { md: 225, sm: 225, xs: 'max-content', }, 
                display: 'flex', flexDirection: {md: 'column', sm: 'column', xs: 'row'}, 
                overflowX: {md: 'none', sm: 'auto', xs: 'auto'},
                alignItems: 'center' }}>
                <Button variant="outlined" sx={{
                    mt: { md: 3, sm: 3},                   
                    color: '#FF6F3F',
                    borderColor: '#FF6F3F',
                    width: 180,
                    textTransform: 'none',
                    fontFamily: "Poppins",
                    fontWeight: 900
                }} onClick={() => setNum(1)}>Campus Visitors</Button>
                <Button sx={{
                    mt: { md: 1.5, sm: 1.5},
                    color: '#051846',
                    width: 180,
                    textTransform: 'none',
                    fontFamily: "Poppins",
                    fontWeight: 900
                }} onClick={() => setNum(2)}>My Applications</Button>
                <Button sx={{
                    mt: { md: 1.5, sm: 1.5},
                    color: '#051846',
                    width: 180,
                    textTransform: 'none',
                    fontFamily: "Poppins",
                    fontWeight: 900
                }} onClick={() => setNum(3)}>Saved Visitors</Button>
                <Button sx={{
                    mt: { md: 1.5, sm: 1.5},
                    color: '#051846',
                    width: 180,
                    textTransform: 'none',
                    fontFamily: "Poppins",
                    fontWeight: 900
                }} onClick={() => setNum(4)}>Your Eligibility</Button>
                <Button sx={{
                    mt: { md: 1.5, sm: 1.5},
                    color: '#051846',
                    width: 180,
                    textTransform: 'none',
                    fontFamily: "Poppins",
                    fontWeight: 900
                }}>Placement Results</Button>
                <Button sx={{
                    mt: { md: 1.5, sm: 1.5},
                    mb: 4,
                    color: '#051846',
                    width: 180,
                    textTransform: 'none',
                    fontFamily: "Poppins",
                    fontWeight: 900
                }} onClick={() => setNum(5)}>Forum</Button>
            </Card>
        </>
    )
}