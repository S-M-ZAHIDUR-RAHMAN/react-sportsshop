import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(swal("User Logged out successfully!"))
            .catch()
    }

    const navLinks = <div className="lg:flex text-blue-500">
        <li><NavLink to="/">Home</NavLink></li>
        {
            user ? <>
                <li><NavLink to="/addProduct">Add Product</NavLink></li>
                <li><NavLink to="/myCart">My Cart</NavLink></li>
            </>
                : <>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
        }
    </div>


    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-blue-400 rounded-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="normal-case text-white rounded-full py-1 px-4 text-xl font-extrabold bg-slate-500 flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:gap-2 animate-bounce">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
                        </div>
                        <div>
                            <span className="text-yellow-300">Sports</span>shop
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-2 md:flex-row md:gap-2">
                            <span className="w-10"><img className="rounded-full" src={`${user.photoURL}`} alt="" /></span>
                            <span className="text-white w-20 md:w-auto flex-wrap font-semibold px-1 rounded-md shadow-2xl bg-black lg:w-auto">{user?.displayName}</span>
                            <a onClick={handleLogOut} className="btn accent bg-yellow-400">Log out</a>
                        </div>
                            : <Link to="/login" className="btn accent bg-yellow-400">Log in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;