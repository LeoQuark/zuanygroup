import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/users/UserContext'

import SignIn from '../components/Login/SignIn';
import SignUp from '../components/Login/SignUp';

const Login = () => {

    const { userName, loginUserContext, logoutUserContext } = useContext(UserContext)

    const [loginIn, setLoginIn] = useState(true)
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSetLoginIn = () => setLoginIn(!loginIn)

    const handleUser = (event) => setUser(event.target.value)
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const resetInput = () => {
        setUser('')
        setEmail('')
        setPassword('')
    }

    // inicio de sesion o creacion de una cuenta
    const loginUser = (event) => {
        event.preventDefault()

        // login con email y password
        if (loginIn) {
            console.log({
                email,
                password
            })
        }
        // create account con user, email y password
        else {
            console.log({
                user,
                email,
                password
            })
        }
    }

    useEffect(() => {
        resetInput()
    }, [loginIn])

    // console.log('test', userName, loginIn)

    return (
        <div className='background-login'>
            <div className="container-fluid p-0 h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-11 col-md-10 col-lg-4 container-login">
                        <form onSubmit={loginUser}>
                            <div className="d-flex justify-content-center my-5">
                                <h2 className='title-login'>Zuany Group</h2>
                            </div>
                            {loginIn ?
                                <SignIn
                                    email={email}
                                    password={password}
                                    handleSetLoginIn={handleSetLoginIn}
                                    handleEmail={handleEmail}
                                    handlePassword={handlePassword}
                                /> :
                                <SignUp
                                    user={user}
                                    email={email}
                                    password={password}
                                    handleSetLoginIn={handleSetLoginIn}
                                    handleUser={handleUser}
                                    handleEmail={handleEmail}
                                    handlePassword={handlePassword}
                                />}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login