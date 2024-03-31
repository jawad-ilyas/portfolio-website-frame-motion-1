import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
export default function Contract() {
    return (
        <motion.div className='pt-28 pb-12' initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
            <h1 className='text-center text-4xl'>Get In Touch</h1>
            <p className='text-center py-1'>Lorem ipsum dolor sit.</p>
            <p className='text-center'>
                <p> <a className='text-center py-1' href="tel:+923170337097">+923170337097</a></p>
                <a className='text-center py-1' href="mailto:mughaljawad12@gmail.com">mughaljawad12@gmail.com</a>
            </p>
        </motion.div>
    );
}
