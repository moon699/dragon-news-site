import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div >
            <h1 className="font-semibold mb-3">Login With</h1>
            <div className=" *:w-full space-y-2 ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ">
                    <FaGoogle/>Log in with Google</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <FaGithub />Log in with Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;