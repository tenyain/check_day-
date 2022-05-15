import React from 'react';

/**
 *  Components 
 */
import { ProfileForm } from '../../components';
import AnimatePage from '../../containers/AnimatePage';

const CreateProfile = () => {
    return (
        <>
            <AnimatePage>
                <div className='min-h-screen flex justify-center items-center'>
                    <ProfileForm />
                </div>
            </AnimatePage>
        </>
    );
}

export default CreateProfile;
