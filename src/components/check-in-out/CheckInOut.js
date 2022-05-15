import React from 'react';

const CheckInOut = (props) => {

    const { checkState, setCheckState } = props;

    return (
        <section className='container container-main my-4'>
            <div className='flex items-center justify-between'>
                <p className='text-color-dark'>I am checking ...</p>
                
                <button className={`bg-color-dark w-14 shadow-md py-1 font-bold font-display rounded-full text-sm text-white border-4 ${checkState ? 'border-color-success' : 'border-color-warning'} outline-1 outline-color-dark`} onClick={()=> setCheckState(!checkState)}>
                    {checkState ? 'IN' : 'OUT'}
                </button>
            </div>
        </section>
    );
}

export default CheckInOut;
