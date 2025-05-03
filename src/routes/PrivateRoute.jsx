import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    if(loading){
        return <p>loading....</p>
    }



    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;