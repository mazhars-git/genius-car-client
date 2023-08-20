import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className='text-center py-10'>
            <span className="loading loading-dots bg-orange-500 loading-lg"></span>        
        </div>
        
    }
    
    if(user){
        return children;
    }    
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;