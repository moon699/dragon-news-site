import moment from "moment/moment";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-3">
            <div className="logo">
                <img className="w-150 h-15" src={logo} alt="Logo" />
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{ moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;