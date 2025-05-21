import React from 'react';
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <div className='py-5 bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-center ' >
            <div className='w-11/12 mx-auto'>
                
                <div className='grid grid-cols-1  md:grid-cols-3 gap-y-6 justify text-center md:text-left justify-items-center'>
                    <div>
                        <h2 className='text-xl font-medium mb-2'>About</h2>
                        <p className='opacity-85 font-medium textarea-md'>A platform that helps individuals find freelancers for small tasks and freelancers to find work opportunities. Users can post tasks, bid on tasks, and connect with each other based on skills, budget, and deadlines.</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-medium mb-2'>Contact Us</h2>
                        <p className='opacity-85 font-medium textarea-md'>+880-1774433063</p>
                        <p className='opacity-85 font-medium textarea-md'>Email: asifahmed5544@gmail.com</p>
                    </div>
                    <div className='grid grid-cols-1'>
                        <div className='justify-items-center'>
                            <h2 className='text-xl font-medium mb-2'>Social Media</h2>
                            <div className='flex gap-x-4'><a target="_blank" href='https://www.facebook.com/fahimahmed420/'><FaFacebook /></a><a target="_blank" href="https://www.youtube.com/@EmperorCloud"><FaYoutube /></a><a target="_blank" href="https://www.instagram.com/cl0ud42o/"><FaInstagramSquare /></a><a target="_blank" href="https://x.com/Fahim_Ahmed_420"><FaTwitter /></a></div>
                        </div>
                        <div className='flex items-center opacity-80'><LiaCopyrightSolid /><p>2025- All rights Reserved</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;