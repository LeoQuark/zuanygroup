import React, { useEffect } from 'react';

// Registrarse / logearse
const SignIn = ({
    email,
    password,
    handleSetLoginIn,
    handleEmail,
    handlePassword
}) => {

    return (
        <div>
            <div className="d-block justify-content-center mt-5 mx-5">
                <div>
                    <label className='font-form-login'>Email</label>
                    <input
                        value={email}
                        type="email"
                        className='form-control'
                        onChange={(event) => handleEmail(event)}
                        placeholder='example@gmail.com'
                    />
                </div>
                <div className='my-2'>
                    <label className='font-form-login'>Password</label>
                    <input
                        value={password}
                        type="password"
                        className='form-control'
                        onChange={(event) => handlePassword(event)}
                        placeholder='**********'
                    />
                </div>
                <div className='mt-4'>
                    <button
                        type='submit'
                        className='btn-zg-login'
                    >Sign In</button>
                </div>
            </div>
            <div className='d-block justify-content-center my-4'>
                <p className='m-0 text-center'>Don't have an account?</p>
                <div className='text-center font-create-account'
                    onClick={() => handleSetLoginIn()}
                >
                    Create an account!
                </div>
            </div>
        </div>
    )
}

export default SignIn