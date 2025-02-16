import { Children } from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layout Compponent/LeftNavbar";
import RightNavbar from "../Components/Layout Compponent/RightNavbar";
import Navbar from "../Components/Navbar";
import CategoryNews from "../Pages/CategoryNews";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>  
            </header>

            <nav>
                <section className="w-11/12 mx-auto py-2">
                    <Navbar></Navbar>
                </section>
            </nav>

            <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-3">
                <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;