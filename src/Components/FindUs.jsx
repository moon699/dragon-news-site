import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="py-10">
            <h1 className="font-semibold">Find Us On</h1>
            <div className="*:w-full space-y-2 justify-start">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-start">
                    <FaFacebook/>Facebook</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-start">
                    <FaTwitter />Twitter</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-start">
                    <FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;