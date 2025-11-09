import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='h-screen grid place-items-center'>
                <div className="card-body w-fit md:w-[400px] bg-white py-4 px-7 shadow-2xl rounded text-primary">
                <h1 className='text-3xl text-center mb-4 font-semibold'>Register Now</h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                        <label className="label">Name:</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" required/>
                        <label className="label">Photo URL:</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" required/>
                        <label className="label">Email:</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required/>
                        <label className="label">Password:</label>
                        <div className='relative'>
                            <input type={showPass ? 'text' : 'password'} name='password' className="input w-full" placeholder="Password" required/>
                            <span onClick={()=> setShowPass(!showPass)} className='absolute cursor-pointer top-[20%] right-[5%] z-10 p-1'>
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }
                            </span>
                        </div>
                        <button type='submit' className="btn btn-primary mt-4">Register</button>
                        </fieldset>
                    </form>
                    <div>
                        {
                            error &&
                            <p className='text-center py-2 text-red-500'>{error}</p>
                        }
                        <p className='my-3 font-medium text-center'>Already have an account? <Link className='text-primary font-semibold' to='/login'>Login</Link></p>
                        <p className='text-center font-medium'>Or With</p>
                        <div className='flex justify-center my-2'>
                            {/* Google */}
                            <button className="btn bg-white text-secondary border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                            </button>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Register;