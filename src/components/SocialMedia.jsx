import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

function SocialMedia() {
    return (
        <div className='flex pt-5 space-x-8'>

            <div className='transition duration-300 ease-in-out transform hover:scale-125'>
                <a
                    href='https://www.linkedin.com/in/ajaykumar-saini-914534245/'
                    target='_blank'
                >
                    <BsLinkedin className=' text-blue-800 w-10 h-10' />
                </a>
            </div>

            <div className='transition duration-300 ease-in-out transform hover:scale-125'>
                <a href='https://x.com/ajay_saini21' target='_blank'>
                    <BsTwitter className='text-blue-500 w-10 h-10' />
                </a>
            </div>

            <div className='transition duration-300 ease-in-out transform hover:scale-125'>
                <a href='https://github.com/AjayKumarSaini8' target='_blank'>
                    <BsGithub className='text-white w-10 h-10' />
                </a>
            </div>

        </div>
    );
}

export default SocialMedia;