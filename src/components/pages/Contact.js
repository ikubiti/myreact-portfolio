import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// This is a schema validation using zod
const schema = z.object({
    userName: z
        .string()
        .min(3, { message: 'Name must be at least 3 characters long' }),
    email: z
        .string()
        .min(1, { message: 'Please your email is required' })
        .email({ message: 'Invalid email' }),
    message: z
        .string()
        .min(3, { message: 'Message must be at least 3 characters long' }),
});

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitSuccessful },
    } = useForm({ resolver: zodResolver(schema) });

    const [prompt, setPrompt] = useState('Your Message');
    const [displayFeedback, setDisplayFeedback] = useState(false);

    const handleFormSubmit = (data) => {
        // console.log(data);
        setPrompt('Thank you!');
        setDisplayFeedback(true);
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ userName: '', email: '', message: '' });
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className='container contact mb-5'>
            <div className='py-3 text-center'>
                <h1>Contact Me</h1>
            </div>

            {displayFeedback && (
                <p className='lead px-4'>
                    Thanks for contacting me. Your message has been received.
                    Have a great day!
                </p>
            )}

            <div>
                <form
                    className='form'
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    <div className='input-group'>
                        <input
                            {...register('userName')}
                            id='userName'
                            type='text'
                            placeholder='...full name'
                            className='form-control'
                        />
                        {errors.userName && (
                            <p className='text-danger'>
                                {errors.userName.message}
                            </p>
                        )}
                    </div>
                    <div className='input-group'>
                        <input
                            {...register('email')}
                            id='email'
                            type='email'
                            placeholder='...email address'
                            className='form-control'
                        />
                        {errors.email && (
                            <p className='text-danger'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className='input-group formArea'>
                        <span className='input-group-text'>{prompt}</span>
                        <textarea
                            {...register('message')}
                            className='form-control'
                            aria-label='With textarea'
                            id='message'
                            placeholder='...'
                        ></textarea>
                        {errors.message && (
                            <p className='text-danger'>
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={!isValid}
                        className='w-100 btn btn-primary btn-lg mt-5'
                        type='submit'
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
