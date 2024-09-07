import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './LoginValidation';
import './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [error, setErrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>

            <div className='card p-4 w-50'>
                <h1 className='text-center'>Login</h1>
                <p className='text-center'></p>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0' />
                        {error.email && <span className='text danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'></input>
                        {error.password && <span className='text danger'>{error.password}</span>}

                    </div>
                    <button type="submit" className="btn btn-primary w-100" data-toggle="button" aria-pressed="false" autoComplete="off">Login</button>
                    {/* <p>If you agree our terms and conditions then create accoount</p> */}
                    <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'> Create account</Link>
                </form>
            </div >
        </div >

    )
}

export default Login
