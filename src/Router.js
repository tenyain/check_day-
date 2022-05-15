import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

/**
 *  Constants 
 */
import { HOME, CREATE_PROFILE, PROFILE } from './constants/routes';

/**
 *  Redux 
 */
import { useDispatch } from 'react-redux';
import { setUserName } from './components/profile-form/profileFormSlice';

/**
 *  Pages
 */
import { Home, CreateProfile, Profile } from './pages';

import { AnimatePresence } from 'framer-motion';

const Router = () => {

    const navigate = useNavigate();
    const getUserName = localStorage.getItem('userName');
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(()=>{
        !getUserName ? navigate('/create-profile') : dispatch(setUserName(getUserName));
    }, [getUserName, navigate, dispatch])
    

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path={HOME} element={<Home/>}/>
                    <Route path={CREATE_PROFILE} element={<CreateProfile/>}/>
                    <Route path={PROFILE} element={<Profile/>}/>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default Router;
