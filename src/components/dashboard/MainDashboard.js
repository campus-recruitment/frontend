import React from 'react';
import Header from '../Header';
import ThemeHeader from '../ThemeHeader';
import DashboardProfile from './DashboardProfile';
import { Container } from '@mui/material';

export default function MainDashboard() {
    return(
        <>
            <Header />
            <ThemeHeader />
            <Container maxWidth="lg">
                <DashboardProfile />
            </Container>
        </>
    )
}