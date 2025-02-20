import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center ">
            <div className="">{user && user.name}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    {
                        user && user?.email ? (
                        <div>
                            <img className="w-10 rounded-full" src={user?.photoURL} alt="Not fund" />
                            <p>{user.displayName}</p>
                        </div>
                        ) : (
                                <img src={userIcon} alt="" />
                            )}
                </div>
                {
                    user && user?.email ?(<button onClick={logOut} className="border-2 border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition">Log-Out</button>) :<Link to="/auth/login" className="border-2 border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition">Login</Link>
                }
                <div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;