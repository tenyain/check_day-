import React from 'react';

const DateTime = (props) => {

    const { currentDateTime } = props;

    return (
        <section>
           <div className='container container-main my-4'>
                <div className='flex items-end md:justify-center space-x-4'>
                    <h1 className='text-color-primary font-extrabold text-3xl'>{currentDateTime.day} {currentDateTime.month}, {currentDateTime.weekDay}</h1>
                    <h1 className='text-color-primary font-medium text-2xl'>{currentDateTime.time}</h1>
                </div>
           </div>
        </section>
    );
}

export default DateTime;
