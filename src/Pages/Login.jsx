import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import UserContext from '../context/users/UserContext'
import axios from 'axios';
import SignIn from '../components/Login/SignIn';
import SignUp from '../components/Login/SignUp';

import { APIURL } from '../utils/apiData'
import { setUserSessionStorage } from '../utils/storage'

const Login = () => {

    const { userName, setUserContext, logoutUserContext } = useContext(UserContext)
    const navigate = useNavigate()

    const [loginIn, setLoginIn] = useState(true)
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)

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
    const handleSubmit = async (event) => {
        event.preventDefault()

        // login con email y password
        if (loginIn) {
            const userData = {
                email,
                password
            }

            // console.log(JSON.stringify(userData))
            try {
                const response = await axios.post(
                    `${APIURL}/auth/login`,
                    userData
                )

                const data = response.data
                console.log('aqui', data)


                if (response.status === 200 && data.token) {
                    // setErrorLogin(false)
                    setUserContext(data.user)
                    setUserSessionStorage(data.token, data.user)
                    navigate('/admin/dashboard')
                } else {
                    // error 400 usuario o contraseña incorrecta
                    setErrorLogin(true)
                }

            } catch (error) {
                // error 400 usuario o contraseña incorrecta
                console.log(error)
                setErrorLogin(true)
            }
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

    useEffect(() => {
        if (errorLogin) {
            setTimeout(() => {
                setErrorLogin(false)
            }, 5000)
        }
    }, [errorLogin])

    return (
        <div className='background-login'>
            <div className="container-fluid p-0 h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-11 col-md-10 col-lg-4 container-login">
                        <form onSubmit={handleSubmit}>
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
                        {errorLogin && (
                            <div className='alert-danger-zg'>
                                <div className="alert alert-danger" role="alert">
                                    <p className='m-0 text-center'><strong>Invalid credentials</strong></p>
                                    <p className='m-0 text-center'>Check your email and password.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login