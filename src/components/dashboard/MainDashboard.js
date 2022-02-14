import React from 'react';
import DashboardProfile from './DashboardProfile';
import DashboardMenu from './DashboardMenu'
import { Grid } from '@mui/material';
import CampusVisitors from './CampusVisitors';

export default function MainDashboard() {
    return (
        <>
            <Grid container>
                <Grid item lg={2.5} md={3} sm={3} xs={12}>
                    <DashboardProfile />
                    <DashboardMenu />
                </Grid>
                <Grid item lg={9.5} md={9} sm={9} xs={12}>
                    <CampusVisitors />
                </Grid>
            </Grid>
        </>
    )
}