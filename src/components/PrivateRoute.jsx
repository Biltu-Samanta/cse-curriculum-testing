import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, adminOnly = false }) => {
    const { currentUser, userRole, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (adminOnly && userRole !== 'admin') {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
