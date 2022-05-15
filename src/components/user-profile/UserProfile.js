import React from 'react';

const UserProfile = (props) => {

    const { userName , clearData } = props;

    return (
        <div className='pt-16 text-center container container-main'>
            <h1 className='text-center font-bold text-color-primary text-2xl my-4'>
                {userName}
            </h1>

            <button onClick={clearData} className='btn__danger'>
                Clear Data
            </button>
        </div>
    );
}

export default UserProfile;
