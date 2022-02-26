import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

export default function AdminRoute({ children }) {
    const { user } = useContext(UserContext)
    return !!user.token
        ? children
        : <Navigate to={{ pathname: "/login" }} />

}