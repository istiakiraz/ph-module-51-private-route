import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
// import { auth } from '../firebase.init';
// import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const {logInUser} = use(AuthContext)
  // console.log(logInUser);

    const [showPass, setShowPass] = useState(false)

    const handleLogIn =(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // signInWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     console.log(result);
        // })
        // .catch(error=>{
        //     console.log(error.message);
        // })

        logInUser(email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        })



    }



    return (

        
          <div className="card bg-base-100 mt-24 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl text-yellow-500 text-center font-thin">Login now!</h1>
              <form onSubmit={handleLogIn} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <div className='relative'>
                            <input type={showPass? 'text' : "password"} name='password' className="input" placeholder="Password" />
                            <button type='button' onClick={()=>{setShowPass(!showPass)}} className='btn btn-xs absolute top-2  right-6'>{showPass? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral bg-yellow-600 mt-4">Login</button>
              </form>
              <p>New to this site? Please <Link className='text-blue-600 underline' to='/signup' >Sign Up</Link></p>
            </div>
          </div>
       
    );
};

export default Login;