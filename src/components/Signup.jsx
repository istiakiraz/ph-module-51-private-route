import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
// import { auth } from '../firebase.init';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const {createUser} = use(AuthContext)
  
  // console.log(createUser);

    const [showPass, setShowPass] = useState(false)


    const handleSignUp =(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);

        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     console.log(result);
        // })
        // .catch(error=>{
        //     console.log(error.message);
        // })

        createUser(email, password)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })


    }


    return (
        <div className="card bg-base-100 mt-24 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
        <h1 className="text-3xl text-purple-600 text-center font-thin">Sign Up now!</h1>
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Your Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <div className='relative'>
            <input type={showPass? 'text' : "password"} name='password' className="input" placeholder="Password" />
            <button type='button' onClick={()=>{setShowPass(!showPass)}} className='btn btn-xs absolute top-2  right-6'>{showPass? <FaEyeSlash /> : <FaEye />}</button>
            </div>
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral bg-purple-600 mt-4">Sign Up</button>
          </form>
          <p>Are you already have account? Then <Link className='text-blue-600 underline' to='/login' >Log In</Link></p>
        </div>
      </div>
    );
};

export default Signup;