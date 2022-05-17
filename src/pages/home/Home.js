import React from 'react';
import { Hook } from './hook';
import { DateTime, CopyField, CheckInOut, CheckInForm } from '../../components';
import AnimatePage from '../../containers/AnimatePage';

const Home = (props) => {

    const [currentDateTime, checkState, setCheckState] = Hook(props);

    return (
        <>
            <AnimatePage>
                <div className='pt-16 w-full lg:w-2/6 lg:mx-auto min-h-screen'>
                    <DateTime
                        currentDateTime={currentDateTime}
                    />
                    <CheckInOut 
                        checkState = {checkState}
                        setCheckState = {setCheckState}
                    />
                    <CheckInForm/>
                    <CopyField
                        currentDateTime={currentDateTime}
                        checkState = {checkState}
                    />
                </div>
            </AnimatePage>
        </>
    );
}

export default Home;
