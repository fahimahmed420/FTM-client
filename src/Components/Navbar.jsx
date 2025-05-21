import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';



const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);


    return (
        <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-black mb-10'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar w-11/12 mx-auto justify-between">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="text-3xl font-bold">FTM</div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal text-xl font-bold">
                                {/* Navbar menu content here */}
                                <li className='hover:text-purple-600'><NavLink to={"/"}>Home</NavLink></li>
                                <li className='hover:text-purple-600 '><NavLink to={"/add-task"}>Add Task</NavLink></li>
                                <li className='hover:text-purple-600'><NavLink to={"/browse-tasks"}>Browse Tasks</NavLink></li>
                                <li className='hover:text-purple-600'><NavLink to={"/my-posted-tasks"}>My Posted Tasks</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            {user ? (
                                <button
                                    onClick={signOutUser}
                                    className="relative cursor-pointer  w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                                >
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-red-600 via-pink-700 to-purple-400 group-hover:opacity-100"></span>
                                    <span className="relative">Logout</span>
                                </button>
                            ) : (
                                <Link to={"/login"}>
                                    <button
                                        className="relative cursor-pointer w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                                    >
                                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                        <span className="relative">Login</span>
                                    </button>
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 text-xl font-bold">
                        {/* Sidebar content here */}
                        <li className='hover:text-purple-600'><NavLink to={"/"}>Home</NavLink></li>
                        <li className='hover:text-purple-600 '><NavLink to={"/add-task"}>Add Task</NavLink></li>
                        <li className='hover:text-purple-600'><NavLink to={"/browse-tasks"}>Browse Tasks</NavLink></li>
                        <li className='hover:text-purple-600'><NavLink to={"/my-posted-tasks"}>My Posted Tasks</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;