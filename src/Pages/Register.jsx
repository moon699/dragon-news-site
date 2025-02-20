import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError]=useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more than 5 characters" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({ name, email, photo, password });
    
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch(err => {
            // console.log(err);
        })
      })
    .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode, errorMessage);
  });
  }
  return (
    <div className={`min-h-screen flex justify-center items-center bg-gray-100 `}>
      <div className="bg-white w-full max-w-lg  rounded-lg shadow-lg p-10">
                  <h2 className="text-2xl font-semibold text-center">Register your account</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input name="name" type="text" placeholder="name" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
          {error.name && (
            <label className="block text-red-700 text-xs font-semibold">{error.name}</label>

          )} 
                  <div>
            <label className="block text-gray-700 font-semibold">Photo URL</label>
            <input name="photo" type="text" placeholder="Enter your photo url" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
                      <input name="email" type="email" placeholder="Enter email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
                      
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input name="password" type="password" placeholder="Enter password" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
            
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">Register</button>
              </form>
                            <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-500" to="/auth/login">Login</Link></p>

      </div>
    </div>
  );
};

export default Register;