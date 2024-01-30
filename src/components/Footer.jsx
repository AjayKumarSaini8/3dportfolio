// Footer.tsx

import React from 'react';
import SocialMedia from './SocialMedia';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white p-4 w-full ">
            <div className='items-center flex flex-col justify-between max-w-2xl mx-auto'>
                <SocialMedia />
            </div>
            <br />
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-2xl mx-auto">
                <div className="flex items-center">
                    <span className="font-bold text-lg tracking-wider text-purple-500">Ajaykumar Saini</span>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="ml-2 md:ml-4" /> &nbsp;
                    <span className="inline-block tracking-wider"> sainiajaykumar716@gmail.com</span>
                </div>
            </div>
            <br />
            <div className='items-center flex flex-col justify-between sm:flex-auto max-w-2xl mx-auto'>
                <span className="inline-block tracking-wider"> © 2024 Ajaykumar Saini™.</span>
                <span className="inline-block tracking-wider">  All Rights Reserved</span>
            </div>

        </footer>
    );
};

export default Footer;
