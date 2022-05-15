import React from 'react';
import { Hook } from './hook';
import AnimatePage from '../../containers/AnimatePage';
import { UserProfile } from '../../components';

const Profile = (props) => {

    const [ userName , clearData ] = Hook(props);

    return (
        <>
            <AnimatePage>
                <UserProfile
                    userName={userName}
                    clearData={clearData}
                />
            </AnimatePage>
        </>
    );
}

export default Profile;
