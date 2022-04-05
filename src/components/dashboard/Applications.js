import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/material';
import { UserContext } from '../../contexts/userContext';

export default function Applications() {
    const { user } = useContext(UserContext)
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/visitor', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.visitor);
                setVisitors(data.visitor);
            })
    }, [])
    return (
        <>
            <Box sx={{ mt: 2, height: '95%', border: '2px solid #c8c7c7', borderRadius: '6px' }}>
                Hello
            </Box>
        </>
    )
}