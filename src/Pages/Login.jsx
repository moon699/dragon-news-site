// import React from 'react';

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

// const Login = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Login;




const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError]=useState({})
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state?location.state:"/")
      })
    .catch ((err) => {
      setError({...error, login:err.code})
    })
  }
  return (
    <div className={`min-h-screen flex justify-center items-center bg-gray-100 `}>
      <div className="bg-white w-full max-w-lg  rounded-lg shadow-lg p-10">
                  <h2 className="text-2xl font-semibold text-center">Login your account</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input name="email" type="email" placeholder="Enter email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input name="password" type="password" placeholder="Enter password" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
            {
              error.login && <label className="label text-sm text-red-600">{ error.login}</label>
            }
            <a href="#" className="text-sm text-blue-600 hover:underline block mt-1">Forgot password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">Login</button>
              </form>
              <p className="text-center font-semibold">Don’t Have An Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
