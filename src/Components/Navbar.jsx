import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        signOutUser().catch(err => console.error(err));
        setIsDropdownOpen(false);
    };

   useEffect(() => {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
}, []);

console.log(user);
    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar w-11/12 mx-auto justify-between">
                        {/* Mobile menu button */}
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>

                        <div className="text-3xl font-bold text-white">FTM</div>

                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal text-xl font-bold text-white">
                                <li className='hover:text-purple-600'><NavLink to="/">Home</NavLink></li>
                                <li className='hover:text-purple-600'><NavLink to="/add-task">Add Task</NavLink></li>
                                <li className='hover:text-purple-600'><NavLink to="/browse-tasks">Browse Tasks</NavLink></li>
                                <li className='hover:text-purple-600'><NavLink to="/my-posted-tasks">My Posted Tasks</NavLink></li>
                            </ul>
                        </div>

                        {/* Auth Buttons or User Profile */}
                        <div className="flex items-center gap-4">
                            {!user ? (
                                <div className="flex items-center gap-4">
                                    <Link to="/login">
                                        <button className="relative cursor-pointer px-6 py-3 font-bold text-white rounded-md group overflow-hidden shadow-2xl">
                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                            <span className="relative">Login</span>
                                        </button>
                                    </Link>
                                    <Link to="/registation">
                                        <button className="relative px-6 cursor-pointer py-3 font-bold text-white rounded-md group overflow-hidden shadow-2xl">
                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-600 via-blue-700 to-indigo-400 group-hover:opacity-100"></span>
                                            <span className="relative">Signup</span>
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="relative" ref={dropdownRef}>
                                    <img
                                        src={user.photoURL || 'https://i.ibb.co/SwwR8MqS/animated.gif'}
                                        alt="User"
                                        className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                                        onClick={toggleDropdown} />

                                    {/* Profile's dropdown */}
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-[#111] text-white rounded-md shadow-lg z-50">
                                            <div className="text-center my-3">
                                                {user.displayName || 'User'}
                                            </div>
                                            <div className='flex justify-center'>
                                                <label className="swap swap-rotate">
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) => {
                                                            const theme = e.target.checked ? "mycustomtheme" : "light";
                                                            document.documentElement.setAttribute("data-theme", theme);
                                                            localStorage.setItem("theme", theme); // optional: remember theme
                                                        }}
                                                    />

                                                    {/* Sun icon */}
                                                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M5.64,17.66L4.22,19.08l1.42,1.42l1.42-1.42L5.64,17.66z M12,22h0v2h0V22z M18.36,17.66l-1.42,1.42l1.42,1.42l1.42-1.42L18.36,17.66z M22,12h2h-2v0z M17.66,5.64l1.42-1.42L17.66,2.8l-1.42,1.42L17.66,5.64z M12,2h0V0h0V2z M5.64,6.34L4.22,4.92L2.8,6.34l1.42,1.42L5.64,6.34z M2,12H0h2v0z" />
                                                        <circle cx="12" cy="12" r="5" />
                                                    </svg>

                                                    {/* Moon icon */}
                                                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M21.64 13.58A9 9 0 0 1 12.42 2.36a9 9 0 1 0 9.22 11.22z" />
                                                    </svg>
                                                </label>

                                            </div>
                                            <div className="w-full text-center">
                                                <Link to="/profile" className="text-lg font-bold my-3 mx-auto inline-block cursor-pointer hover:text-blue-700">Profile Settings</Link>

                                                <button onClick={handleLogout} className="text-lg font-bold my-3 mx-auto inline-block cursor-pointer hover:text-blue-700">Log out</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Drawer Sidebar for mobile */}
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" className="drawer-overlay" aria-label="close sidebar"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 text-xl font-bold">
                        <li className='hover:text-purple-600'><NavLink to="/">Home</NavLink></li>
                        <li className='hover:text-purple-600'><NavLink to="/add-task">Add Task</NavLink></li>
                        <li className='hover:text-purple-600'><NavLink to="/browse-tasks">Browse Tasks</NavLink></li>
                        <li className='hover:text-purple-600'><NavLink to="/my-posted-tasks">My Posted Tasks</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
