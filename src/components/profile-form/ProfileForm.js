import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/**
 *  Redux 
 */
import { useDispatch } from 'react-redux';
import { setUserName } from './profileFormSlice';


const ProfileForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameSubmit = (data) => {
        dispatch(setUserName(data.userName));
        console.log(data)
        localStorage.setItem('userName', data.userName);
        navigate('/')
    }; 

    const userNameRegex = /[A-Za-z]/i;

    return (
        <div className='container container-main'>
            <form className='flex flex-col space-y-4' onSubmit={handleSubmit(nameSubmit)}>
                <div className='flex space-y-2 flex-col'>
                    <label className='text-color-primary text-sm' htmlFor="userName">Enter your name:</label>
                    <input type='text' className='input__primary' {...register("userName", { required: true, minLength: 5,pattern: userNameRegex })} 
                    name="userName" id='userName' autoComplete='off' placeholder='Full name' />
                    {
                        errors.userName &&
                        <span className='text-red-500'>
                            {
                                errors.userName.type === 'minLength' &&
                                'Please enter a full name.'
                            }
                            {
                                errors.userName.type === 'pattern' &&
                                'Please enter a valid name.'
                            }
                            {
                                errors.userName.type === 'required' &&
                                'Please fill the field.'
                            }
                        </span>
                    }
                </div>

                <input className='btn__primary' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ProfileForm;
