import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Hello! <span className="text-success">{user.displayName}</span> <br /> Welcome to Car Venture.</h1>
        </div>
    );
};

export default DashboardHome;