import { FaBars } from "react-icons/fa6";
import logo from "../assets/business.png"
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    return (
        <nav className="border-b sticky top-0 z-10 bg-white py-1 shadow">
            <div className="navbar container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBars className="text-3xl" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-52 p-3 py-4 shadow gap-2 font-medium">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/all-campaign'>All Campaign</NavLink></li>
                            <li><NavLink to='/add-new-campaign'>Add New Campaign</NavLink></li>
                            <li><NavLink to='/my-campaign'>My Campaign</NavLink></li>
                            <li><NavLink to='/my-donations'>My Donations</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} className="md:w-14 w-12" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/all-campaign'>All Campaign</NavLink></li>
                        <li><NavLink to='/add-new-campaign'>Add New Campaign</NavLink></li>
                        <li><NavLink to='/my-campaign'>My Campaign</NavLink></li>
                        <li><NavLink to='/my-donations'>My Donations</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex gap-3">
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img  src={user?.photoURL} className="w-10 h-10 rounded-full" />
                                </div>
                               
                                <Link onClick={signOutUser} className="bg-purple-600 text-white px-4 py-2 rounded font-medium">Log Out</Link>
                            </div>
                            :
                            <div className="flex gap-3">
                                <Link to='/login' className="bg-purple-600 text-white px-4 py-2 rounded font-medium">Login</Link>
                                <Link to='/signup' className="bg-purple-600 text-white px-4 py-2 rounded font-medium">Register</Link>
                            </div>
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar;