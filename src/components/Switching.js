import { Button, Card, CardContent, Typography, CardActions, Box } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

export default function Switching() {
    const { user } = useContext(UserContext)
    return (
        <>
            <Box sx={{ maxWidth: 475, textAlign: 'center' }}>
                <Card variant="outlined" sx={{ p: 1 }}>
                    <CardContent>
                        <Typography component="div"
                            sx={{
                                mb: 1.5,
                                fontFamily: "Poppins",
                                fontSize: '18px',
                                fontWeight: 900
                            }}>
                            Hey there. Do you want to get placed?
                        </Typography>
                        <Typography color="text.secondary"
                            sx={{
                                mb: 1.5,
                                fontFamily: "Poppins",
                                fontSize: '14px'
                            }} >
                            Go to the dashboard to manage your placement related data and apply easily for any companies visiting in your college.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        {
                            user.admin
                                ? <Link to="/admin-dashboard"><Button variant="contained"
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#041846'}
                                    sx={{
                                        color: 'white',
                                        backgroundColor: '#041846',
                                        textTransform: 'none',
                                        fontFamily: "Poppins"
                                    }}>Go to Admin Panel</Button></Link>
                                : <Link to="/dashboard"><Button variant="contained"
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#041846'}
                                    sx={{
                                        color: 'white',
                                        backgroundColor: '#041846',
                                        textTransform: 'none',
                                        fontFamily: "Poppins"
                                    }}>Go to Dashboard</Button></Link>
                        }
                    </CardActions>
                </Card>
            </Box>

        </>
    )
}