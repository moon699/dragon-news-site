import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <div>
                    <Link to="/auth/login" className="border-2 border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition">Login</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;