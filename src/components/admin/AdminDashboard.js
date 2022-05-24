import React, { useContext } from 'react';
import Header from '../Header';
import ThemeHeader from './ThemeHeader';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AdminDashboard() {
    return (
        <>
            <Header />
            <ThemeHeader />
            <Link to="analysis"><Button>Analysis</Button></Link>
            <Link to="students-list"><Button>List Of Students</Button></Link>
            <Link to="visitors-list"><Button>List of Visitors</Button></Link>
            <Link to="notice-form"><Button>Create Notice</Button></Link>
            <Link to="visitor-form"><Button>Create Visitor</Button></Link>
        </>
    )
}

// Analysis - total registered students, total visitors added
// list of students - with their details 
// list of visitors - with details 