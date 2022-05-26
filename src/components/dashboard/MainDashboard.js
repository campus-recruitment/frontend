import React, { useEffect, useState } from 'react';
import DashboardProfile from './DashboardProfile';
import DashboardMenu from './DashboardMenu'
import { Divider, Grid } from '@mui/material';
import CampusVisitors from './CampusVisitors';
import Header from '../Header';
import ThemeHeader from '../ThemeHeader';
import { Button, Card } from '@mui/material';
import '@fontsource/poppins';
import Applications from './Applications';
import Saved from './Saved';
import VisitorDetails from './VisitorDetails';
import Notices from './Notices';

export default function MainDashboard() {
    const [num, setNum] = useState(1);
    const [active, setActive] = useState(false);

    return (
        <>
            <Header />
            <ThemeHeader />
            <Grid container maxWidth="lg" sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Grid item lg={2.5} md={3} sm={3} xs={12}>
                    <DashboardProfile />
                    <Card elevation={0} variant="outlined" className='menu-card' sx={{
                        mt: 1, width: { md: 225, sm: 225, xs: 'max-content', },
                        display: 'flex', flexDirection: { md: 'column', sm: 'column', xs: 'row' },
                        overflowX: { md: 'none', sm: 'auto', xs: 'auto' },
                        alignItems: 'center'
                    }}>
                        <Button sx={{
                            mt: { md: 3, sm: 3 },
                            color: '#051846',
                            width: 180,
                            textTransform: 'none',
                            fontFamily: "Poppins",
                            fontWeight: 900
                        }} onClick={() => {
                            setNum(1);

                        }}>Campus Visitors</Button>
                        <Button sx={{
                            mt: { md: 1.5, sm: 1.5 },
                            color: '#051846',
                            width: 180,
                            textTransform: 'none',
                            fontFamily: "Poppins",
                            fontWeight: 900
                        }} onClick={() => setNum(2)}>My Applications</Button>
                        <Button sx={{
                            mt: { md: 1.5, sm: 1.5 },
                            color: '#051846',
                            width: 180,
                            textTransform: 'none',
                            fontFamily: "Poppins",
                            fontWeight: 900
                        }} onClick={() => setNum(3)}>Saved Visitors</Button>
                        <Button sx={{
                            mt: { md: 1.5, sm: 1.5 },
                            color: '#051846',
                            width: 180,
                            textTransform: 'none',
                            fontFamily: "Poppins",
                            fontWeight: 900
                        }} onClick={() => setNum(4)}>Notice Board</Button>
                        <Button sx={{
                            mt: { md: 1.5, sm: 1.5 },
                            color: '#051846',
                            width: 180,
                            textTransform: 'none',
                            fontFamily: "Poppins",
                            fontWeight: 900
                        }}>Placement Results</Button>
                        <Button sx={{
                            mt: { md: 1.5, sm: 1.5 },
                            mb: 4,
                            color: '#051846',
                            width: 180,
                            textTransform: 'none',
                            fontFamily: "Poppins",
                            fontWeight: 900
                        }} onClick={() => setNum(5)}>Forum</Button>
                    </Card>
                </Grid>
                <Grid item lg={9.5} md={9} sm={9} xs={12}>
                    {
                        num == 1 ? <CampusVisitors setNum={setNum} /> :
                            num == 2 ? <Applications /> :
                                num == 3 ? <Saved /> :
                                    num == 4 ? <Notices /> :
                                        <></>
                    }
                </Grid>
            </Grid>
        </>
    )
}