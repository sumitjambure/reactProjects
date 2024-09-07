
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import validation from './SignupValidation';

// function Signup() {
//     const [values, setValues] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });
//     const [errors, setErrors] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const handleInput = (event) => {
//         setValues(prevValues => ({ ...prevValues, [event.target.name]: event.target.value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(validation(values));
//     };

//     return (
//         <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//             <div className='card p-4 w-50'>
//                 <h1 className='text-center'>Sign up</h1>
//                 <p className='text-center'>Please enter your details</p>
//                 <form action='' onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor='email'><strong>Name</strong></label>
//                         <input type='text' placeholder='Name here' name='name' onChange={handleInput} className='form-control rounded-0' />
//                         {errors.name && <span className='text-danger'>{errors.name}</span>}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor='email'><strong>Email</strong></label>
//                         <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0' />
//                         {errors.email && <span className='text-danger'>{errors.name}</span>}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor='password'><strong>Password</strong></label>
//                         <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0' />
//                         {errors.password && <span className='text-danger'>{errors.password}</span>}
//                     </div>
//                     <button type="submit" class="btn btn-primary w-100" data-toggle="button" aria-pressed="false" autocomplete="off">Sign up</button>
//                     <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'> Login</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Signup;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './SignupValidation'; // Import your validation function

function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

    const handleInput = (event) => {
        setValues(prevValues => ({ ...prevValues, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Set loading state

        setErrors(validation(values)); // Validate fields

        const isValid = Object.values(errors).every(error => error === ""); // Check for errors

        if (isValid) {
            try {
                const response = await fetch('/signup', { // Use fetch API for HTTP request
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }, // Set content type
                    body: JSON.stringify(values), // Send data as JSON
                });

                if (response.ok) {
                    const data = await response.json(); // Parse response data

                    // Handle successful signup (e.g., display success message, redirect)
                    console.log('Signup successful:', data);
                } else {
                    // Handle signup error (e.g., display error message)
                    console.error('Signup failed:', response.statusText);
                }
            } catch (error) {
                // Handle network or other errors
                console.error('Error during signup:', error);
            } finally {
                setIsSubmitting(false); // Reset loading state
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='card p-4 w-50'>
                <h1 className='text-center'>Sign up</h1>
                <p className='text-center'>Please enter your details</p>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Name here' name='name' onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    {/* <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                        {isSubmitting ? 'Signing Up...' : 'Sign up'}
                    </button> */}
                    <button type="submit" className="btn btn-primary w-100" data-toggle="button" aria-pressed="false" autoComplete="off">Sign up</button>
                    <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'> Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;