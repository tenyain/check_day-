import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskItem } from './checkInFormSlice';

import { AiOutlinePlus } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const CheckInForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [formShow, setFormShow] = useState(false);
    const { itemList } = useSelector(state => state.checkInForm);
    const dispatch = useDispatch();

    const ItemSubmit = (data) => {
        console.log(data)
        setFormShow(false)
        dispatch(addTaskItem(data.checkInItem))
        reset()
    };

    const CloseForm = () => {
        reset()
        setFormShow(false)
    }

    return (
        <>
            {/* Add Task Item Form */}
            <div className={`absolute ${formShow ? 'opacity-100 visible' : 'opacity-0 invisible'} top-0 left-0 right-0 bottom-0 w-full h-full bg-color-dark bg-opacity-70 flex justify-center items-center transition-all duration-300`}>
                <div>
                    <form className='relative flex flex-col space-y-4 w-[22rem] bg-white py-4 px-6 rounded-md' onSubmit={handleSubmit(ItemSubmit)}>
                        <button onClick={CloseForm} className='absolute right-3 -top-4 bg-color-danger rounded-full p-1 text-white'>
                            <MdClose size={'1.5rem'} stroke={'#fff'} fill={'#fff'} />
                        </button>
                        <div className='flex space-y-2 flex-col'>
                            <label className='text-color-primary text-sm font-bold' htmlFor="checkInItem">Enter your task:</label>
                            <textarea type='text' className='input__primary' {...register("checkInItem", { required: true, minLength: 10 })}
                                name="checkInItem" id='checkInItem' autoComplete='off' placeholder='Your task' />
                            {
                                errors.checkInItem &&
                                <span className='text-red-500 text-sm'>
                                    {
                                        errors.checkInItem.type === 'minLength' &&
                                        'Please enter a proper text.'
                                    }
                                    {
                                        errors.checkInItem.type === 'required' &&
                                        'Please fill the field.'
                                    }
                                </span>
                            }
                        </div>

                        <input className='w-full cursor-pointer bg-color-secondary px-4 py-2 rounded-sm text-white' type="submit" value="Add Item" />
                    </form>
                </div>
            </div>

            
            <section className='container container-main my-2'>
                <div className='space-y-2 px-2 mb-4'>
                    {
                        itemList.length > 0 &&
                        itemList.map((item, index) => {
                            return(
                                <div key={index} className="border-b px-2 py-2">
                                    <h1>{item}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Add Task Button */}
                <button onClick={() => setFormShow(true)} className='bg-gray-200 w-full px-4 py-2 rounded-md flex justify-center items-center text-color-primary'>
                    <AiOutlinePlus size={'1.5rem'} />
                </button>
            </section>
        </>
    );
}

export default CheckInForm;
