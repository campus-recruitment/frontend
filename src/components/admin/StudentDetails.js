import React from 'react';
import { Button } from '@mui/material';

export default function StudentDetails ({selectedStudent, setSelectedStudent}) {
    return (
        <>
            <h1>{selectedStudent.fullName}</h1>
            <Button onClick={() => setSelectedStudent(null)}>Back</Button>
        </>
    )
}