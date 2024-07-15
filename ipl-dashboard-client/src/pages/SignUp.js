import React from 'react'
import './SignUp.css'

export const SignUp = () => {
    return (
        <div className="addUser">
            <h3>Sign Up</h3>
            <form className="addUserForm">
                <div className='inputGroup'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        autoComplete='off'
                        placeholder='Enter your Name'
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        autoComplete='off'
                        placeholder='Enter your Email'
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        autoComplete='off'
                        placeholder='Enter your Password'
                    />
                    <button type="submit" class="btn btn-success">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
