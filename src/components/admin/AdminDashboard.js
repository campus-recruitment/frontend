import React, { useContext } from 'react';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardMedia, Box } from '@mui/material';
import analysis from '../../assets/svgs/Data-extraction-pana.svg';
import listofstudents from '../../assets/svgs/Social-distance-at-school-amico.svg';
import listofvisitors from '../../assets/svgs/Company-rafiki.svg';
import createnotice from '../../assets/svgs/Add-notes-pana.svg';
import createvisitor from '../../assets/svgs/Consulting-amico.svg';

export default function AdminDashboard() {
    return (
        <>
            <Header />
            <ThemeHeader />
            <Box sx={{ display: 'flex', justifyContent: 'space-around', m: 2 }}>
                <Card sx={{ width: 245 }} elevation={0} variant="outlined">
                    <CardMedia height="194" component="img" image={analysis} />
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="analysis"><Button sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: "#FFFFFF",
                            textTransform: 'none',
                            backgroundColor: '#401E44'
                        }} variant='contained'>Data & Statistics</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ width: 245 }} elevation={0} variant="outlined">
                    <CardMedia height="194" component="img" image={createnotice} />
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="notice-form"><Button sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: "#FFFFFF",
                            textTransform: 'none',
                            backgroundColor: '#401E44'
                        }} variant='contained'>Create Notice</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ width: 245 }} elevation={0} variant="outlined">
                    <CardMedia height="194" component="img" image={createvisitor} />
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="visitor-form"><Button sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: "#FFFFFF",
                            textTransform: 'none',
                            backgroundColor: '#401E44'
                        }} variant='contained'>Create Visitor</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ width: 245 }} elevation={0} variant="outlined">
                    <CardMedia height="194" component="img" image={listofstudents} />
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="students-list"><Button sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: "#FFFFFF",
                            textTransform: 'none',
                            backgroundColor: '#401E44'
                        }} variant='contained'>List of Students</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ width: 245 }} elevation={0} variant="outlined">
                    <CardMedia height="194" component="img" image={listofvisitors} />
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="visitors-list"><Button sx={{
                            mr: 3, pl: 3, pr: 3,
                            color: "#FFFFFF",
                            textTransform: 'none',
                            backgroundColor: '#401E44'
                        }} variant='contained'>List of Visitors</Button></Link>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

// Analysis - total students, total visitors added, Total student placed and unplaced (Categorised by branch and academic year), Highest package (Categorized by branch and acedemic year), Average package (Categorized by branch and academic year), Total queries unanswered, 
// list of students - with their details 
// list of visitors - with details 