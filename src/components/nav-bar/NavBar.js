import React from 'react';
import Logo from '../logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { CREATE_PROFILE, PROFILE, HOME } from '../../constants/routes'

const NavBar = () => {
    const location = useLocation();
    return (
        <>
            {
                location.pathname !== CREATE_PROFILE &&
                <nav className='bg-color-dark shadow-md fixed top-0 left-0 right-0 z-50'>
                    <div className='container container-main'>
                        <div className='flex justify-between items-center'>
                            <Link to={HOME}>
                                <Logo />
                            </Link>

                            <Link className='flex' to={PROFILE}>
                                <button className='text-lg'>
                                    <FaRegUserCircle color='white' size={'1.5rem'} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            }

        </>
    );
}

export default NavBar;
