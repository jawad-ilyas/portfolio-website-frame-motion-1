import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Navbar = () => {
    return (
        
        <nav className=' mb-8 flex justify-between items-center py-6 '>
            <div className='text-neutral-300 text-2xl'>JMD</div>
            <div className='flex flex-row '>
                <FaLinkedin  size={30} className='ms-2 text-neutral-300'/>
                <FaSquareXTwitter  size={30} className='ms-2 text-neutral-300'/>
                <FaFacebookSquare  size={30} className='ms-2 text-neutral-300'/>
                <FaSquareInstagram  size={30} className='ms-2 text-neutral-300'/>
                <FaSquareGithub  size={30} className='ms-2 text-neutral-300'/>

            </div>
        </nav>
    )
}

export default Navbar