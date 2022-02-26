import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

export default function Switching() {
    const { user } = useContext(UserContext)
    return (
        <>
            {
                user.admin
                    ? <Link to="/admin-dashboard"><Button variant="contained">Go to Admin Panel</Button></Link>
                    : <Link to="/dashboard"><Button variant="contained">Go to Dashboard</Button></Link>
            }
        </>
    )
}